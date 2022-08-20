import { readFile, writeFile } from 'fs/promises';
import { Protocol } from 'puppeteer';
import { getDefaultBrowser } from './getDefaultBrowser';
import { getDefaultPage } from './getDefaultPage';
import { loginWithCredentials } from './loginWithCredentials';
import { loginWithSession } from './loginWithSession';
import { sendMEssage } from './sendMessage';

import { USERNAME, PASSWORD } from '../../credentials.json';

export const sendJokeToMessengerGroup = async (message: string) => {
  const browser = await getDefaultBrowser(false); // set to true
  const page = await getDefaultPage(browser);
  let cookies: null | Protocol.Network.Cookie[] = null;

  // Load cookies from previous session
  try {
    const cookiesBuffer = await readFile('cookies.json', {
      encoding: 'utf-8',
    });
    cookies = await JSON.parse(cookiesBuffer);
    console.log(`Loaded Facebook cookies from previous session`);
  } catch (error) {
    console.error(`Unable to load Facebook cookies: ${error}`);
  }

  // Use our cookies to login. If it fails fallback to username and password login.
  if (cookies && Object.keys(cookies).length) {
    try {
      await loginWithSession(cookies, page);
      console.log(`Logged in using session cookies`);
    } catch (error) {
      console.error(`Unable to login using session: ${error}`);
      await loginWithCredentials(USERNAME, PASSWORD, page);
    }
  } else {
    await loginWithCredentials(USERNAME, PASSWORD, page);
  }

  // Save our freshest cookies that contain our Facebook session
  const freshCookies = await page.cookies();
  await writeFile('cookies.json', JSON.stringify(freshCookies, null, 2), {
    encoding: 'utf-8',
  });

  // Send message
  await sendMEssage(page, message);

  // close
  await page.close();
  await browser.close();
};

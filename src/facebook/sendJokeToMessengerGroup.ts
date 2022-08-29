import { readFile, writeFile } from 'fs/promises';
import { Protocol } from 'puppeteer';
import { getDefaultBrowser } from './getDefaultBrowser';
import { getDefaultPage } from './getDefaultPage';
import { loginWithCredentials } from './loginWithCredentials';
import { loginWithSession } from './loginWithSession';
import { sendMEssages } from './sendMessages';

export const sendJokeToMessengerGroup = async (message: string) => {
  const browser = await getDefaultBrowser(false);
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
      await loginWithCredentials(page);
    }
  } else {
    await loginWithCredentials(page);
  }

  // Save our freshest cookies that contain our Facebook session
  const freshCookies = await page.cookies();
  await writeFile('cookies.json', JSON.stringify(freshCookies, null, 2), {
    encoding: 'utf-8',
  });

  // Send message
  await sendMEssages(page, message);

  // close
  await page.close();
  await browser.close();
};

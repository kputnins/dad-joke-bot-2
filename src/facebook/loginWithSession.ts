import { Page, Protocol } from 'puppeteer';
import { FACEBOOK_URL, SELECTORS } from '../constants/constants';

export const loginWithSession = async (
  cookies: Protocol.Network.Cookie[],
  page: Page,
): Promise<void> => {
  console.log('Logging into Facebook using cookies');
  await page.setCookie(...cookies);
  await page.goto(FACEBOOK_URL, { waitUntil: 'networkidle2' });

  try {
    await page.waitForSelector(SELECTORS.messengerIcon);
    console.log('App is logged into Facebook successfully');
    return;
  } catch (error) {
    console.error('App is not logged into Facebook');
    throw error;
  }
};

import { Page, Protocol } from 'puppeteer';
import { FACEBOOK_URL } from '../constants/constants';
import { isLoggedIn } from './isLoggedIn';

export const loginWithSession = async (
  cookies: Protocol.Network.Cookie[],
  page: Page,
): Promise<void> => {
  console.log('Logging into Facebook using cookies');
  await page.setCookie(...cookies);
  await page.goto(FACEBOOK_URL, { waitUntil: 'networkidle2' });

  isLoggedIn(page);
};

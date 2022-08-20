import { Page } from 'puppeteer';
import { FACEBOOK_URL, SELECTORS } from '../constants/constants';
import { generateRandomInteger } from '../utils/generateRandomInteger';
import { isLoggedIn } from './isLoggedIn';
import { sleep } from '../utils/sleep';

export const loginWithCredentials = async (
  username: string,
  password: string,
  page: Page,
): Promise<void> => {
  console.log('Logging into Facebook using credentials for', username);
  await page.goto(FACEBOOK_URL, {
    waitUntil: 'networkidle2',
  });

  sleep(generateRandomInteger({ min: 1500, max: 2000 }));
  await page.waitForSelector(SELECTORS.cookiePopup);
  await page.click(SELECTORS.acceptEssentialCookies);

  sleep(generateRandomInteger({ min: 750, max: 1000 }));
  await page.waitForSelector(SELECTORS.emailField);
  await page.type(SELECTORS.emailField, username);
  await page.type(SELECTORS.passwordField, password);

  await page.click(SELECTORS.loginButton);
  await page.waitForNavigation();

  await isLoggedIn(page);
};

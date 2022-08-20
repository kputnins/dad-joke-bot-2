import { Page } from 'puppeteer';
import { FACEBOOK_URL, SELECTORS } from '../constants/constants';
import { generateRandomInteger } from '../utils/generateRandomInteger';
import { sleep } from '../utils/sleep';

import { FACEBOOK_USERNAME, FACEBOOK_PASSWORD } from '../../credentials.json';

export const loginWithCredentials = async (page: Page): Promise<void> => {
  console.log('Logging into Facebook using credentials for', FACEBOOK_USERNAME);
  await page.goto(FACEBOOK_URL, {
    waitUntil: 'networkidle2',
  });

  sleep(generateRandomInteger({ min: 1500, max: 2000 }));
  await page.waitForSelector(SELECTORS.cookiePopup);
  await page.click(SELECTORS.acceptEssentialCookies);

  sleep(generateRandomInteger({ min: 750, max: 1000 }));
  await page.waitForSelector(SELECTORS.emailField);
  await page.type(SELECTORS.emailField, FACEBOOK_USERNAME, {
    delay: generateRandomInteger({ min: 5, max: 50 }),
  });
  await page.type(SELECTORS.passwordField, FACEBOOK_PASSWORD, {
    delay: generateRandomInteger({ min: 5, max: 50 }),
  });

  await page.click(SELECTORS.loginButton);
  await page.waitForNavigation();

  try {
    await page.waitForSelector(SELECTORS.messengerIcon);
    console.log('App is logged into Facebook successfully');
    return;
  } catch (error) {
    console.error('App is not logged into Facebook');
    throw error;
  }
};

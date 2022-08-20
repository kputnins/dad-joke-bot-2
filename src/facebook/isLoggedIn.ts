import { Page } from 'puppeteer';
import { FACEBOOK_URL, SELECTORS } from '../constants/constants';

export const isLoggedIn = async (page: Page): Promise<void> => {
  try {
    await page.goto(FACEBOOK_URL, {
      waitUntil: 'networkidle2',
    });
    await page.waitForNavigation();
    await page.waitForSelector(SELECTORS.messengerIcon);
    console.log('App is logged into Facebook successfully');
    return;
  } catch (error) {
    console.error('App is not logged into Facebook');
    throw error;
  }
};

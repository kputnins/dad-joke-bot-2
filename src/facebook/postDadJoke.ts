import { Page } from 'puppeteer';
import { generateRandomInteger } from '../utils/generateRandomInteger';
import { sleep } from '../utils/sleep';
import { SELECTORS } from '../constants/constants';

export const postDadJoke = async (page: Page, message: string) => {
  try {
    await sleep(generateRandomInteger({ min: 100, max: 300 }));
    await page.click(SELECTORS.createPostButton);
    await sleep(generateRandomInteger({ min: 200, max: 300 }));
    await page.waitForSelector(SELECTORS.createPostInput);
    await page.type(SELECTORS.createPostInput, message, {
      delay: generateRandomInteger({ min: 5, max: 50 }),
    });
    await page.click(SELECTORS.postButton);
    await sleep(generateRandomInteger({ min: 500, max: 1000 }));
    console.log('Create post');
  } catch (error) {
    console.error('Failed to create post');
    throw error;
  }
};

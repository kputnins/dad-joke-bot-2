import { Page } from 'puppeteer';
import { SELECTORS } from '../constants/constants';
import { generateRandomInteger } from '../utils/generateRandomInteger';
import { sleep } from '../utils/sleep';

export const sendMEssage = async (
  page: Page,
  message: string,
): Promise<void> => {
  try {
    await sleep(generateRandomInteger({ min: 1500, max: 2000 }));
    await page.waitForSelector(SELECTORS.messengerIcon);
    await page.click(SELECTORS.messengerIcon);
    console.log('Selected messenger icon');
  } catch (error) {
    console.error('Failed to select messenger');
    throw error;
  }

  try {
    await sleep(generateRandomInteger({ min: 4000, max: 5000 }));
    await page.waitForSelector(SELECTORS.chatGroup);
    await page.click(SELECTORS.chatGroup);
    console.log('Selected chat');
  } catch (error) {
    console.error('Failed to select chat');
    throw error;
  }

  try {
    await sleep(generateRandomInteger({ min: 500, max: 1000 }));
    await page.waitForSelector(SELECTORS.messageInput);
    await page.type(SELECTORS.messageInput, message);
    await page.click(SELECTORS.sendButton);
    console.log('Sent message: ', message);
  } catch (error) {
    console.error('Failed to send message');
    throw error;
  }
};

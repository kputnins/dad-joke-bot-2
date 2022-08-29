import { Page } from 'puppeteer';
import { SELECTORS } from '../constants/constants';
import { generateRandomInteger } from '../utils/generateRandomInteger';
import { sleep } from '../utils/sleep';
import { MESSENGER_CHAT_IDS } from '../../credentials.json';

export const sendMEssages = async (
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

  // Need to test
  MESSENGER_CHAT_IDS.forEach(async (id) => {
    try {
      await sleep(generateRandomInteger({ min: 3000, max: 4000 }));
      await page.waitForSelector(`${SELECTORS.chatGroup}${id}/`);
      await page.click(`${SELECTORS.chatGroup}${id}/`);
      console.log('Selected chat');
    } catch (error) {
      console.error('Failed to select chat');
      throw error;
    }

    try {
      await sleep(generateRandomInteger({ min: 500, max: 1000 }));
      await page.waitForSelector(SELECTORS.messageInput);
      await page.type(SELECTORS.messageInput, message, {
        delay: generateRandomInteger({ min: 5, max: 50 }),
      });
      await page.click(SELECTORS.sendButton);
      await sleep(generateRandomInteger({ min: 500, max: 1000 }));
      console.log('Sent message: ', message);
    } catch (error) {
      console.error('Failed to send message');
      throw error;
    }
  });
};

/* eslint-disable no-await-in-loop */
import { Page } from 'puppeteer';
import { SELECTORS } from '../constants/constants';
import { generateRandomInteger } from '../utils/generateRandomInteger';
import { sleep } from '../utils/sleep';
import { MESSENGER_CHAT_IDS } from '../../credentials.json';

export const sendMessages = async (
  page: Page,
  message: string,
): Promise<void> => {
  // eslint-disable-next-line no-restricted-syntax
  for (const id of MESSENGER_CHAT_IDS) {
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
      await sleep(generateRandomInteger({ min: 3000, max: 4000 }));
      await page.waitForSelector(`${SELECTORS.chatGroup}/${id}/"]`);
      await page.click(`${SELECTORS.chatGroup}/${id}/"]`);
      console.log('Selected chat with id:', id);
    } catch (error) {
      console.error('Failed to select chat with id', id);
      throw error;
    }

    try {
      await sleep(generateRandomInteger({ min: 500, max: 1000 }));
      await page.waitForSelector(SELECTORS.messageInput);
      await page.type(SELECTORS.messageInput, message, {
        delay: generateRandomInteger({ min: 5, max: 50 }),
      });
      await page.click(SELECTORS.sendButton);
      await sleep(generateRandomInteger({ min: 300, max: 500 }));
      console.log('Sent message: ', message);
    } catch (error) {
      console.error('Failed to send message');
      throw error;
    }

    try {
      await page.click(SELECTORS.closeChatButton);
      await sleep(generateRandomInteger({ min: 500, max: 1000 }));
      console.log('Closed chat with id: ', id);
    } catch (error) {
      console.error('Failed to close chat with id:', id);
      throw error;
    }
  }
};

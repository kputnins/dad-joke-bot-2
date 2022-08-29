import { Browser, launch } from 'puppeteer';
import { FACEBOOK_URL } from '../constants/constants';

export const getDefaultBrowser = async (
  headless: boolean,
): Promise<Browser> => {
  const browser = await launch({
    headless,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    env: {
      DISPLAY: ':1',
    },
  });
  const context = browser.defaultBrowserContext();
  context.overridePermissions(FACEBOOK_URL, []);
  return browser;
};

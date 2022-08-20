import { Browser, launch } from 'puppeteer';

const FACEBOOK_URL = 'https://www.facebook.com';

export const getDefaultBrowser = async (
  headless: boolean,
): Promise<Browser> => {
  const browser = await launch({
    headless,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const context = browser.defaultBrowserContext();
  context.overridePermissions(FACEBOOK_URL, []);
  return browser;
};

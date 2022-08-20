import { Browser, Page } from 'puppeteer';

export const getDefaultPage = async (browser: Browser): Promise<Page> => {
  const page = await browser.newPage();
  await page.setViewport({
    width: 800,
    height: 800,
    deviceScaleFactor: 1,
  });
  page.setDefaultNavigationTimeout(10000);
  page.setDefaultTimeout(5000);
  return page;
};

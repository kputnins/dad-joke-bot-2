export const FACEBOOK_URL = 'https://www.facebook.com/';
export const MESSAGE_ID = '100004316617616';

export const SELECTORS = {
  messengerIcon: 'div[aria-label="Messenger"][role="button"]',
  cookiePopup: 'div[data-testid="cookie-policy-manage-dialog"]',
  acceptEssentialCookies:
    'button[data-testid="cookie-policy-manage-dialog-accept-button"]',
  emailField: '#email',
  passwordField: '#pass',
  loginButton: 'button[name=login]',
  chatGroup: `[href="/messages/t/${MESSAGE_ID}/"]`,
  messageInput: 'div[data-testid="mwchat-tab"] div[aria-label="Message"]',
  sendButton: 'div[aria-label="Press enter to send"][role="button"]',
};

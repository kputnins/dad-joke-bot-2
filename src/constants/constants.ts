export const FACEBOOK_URL = 'https://www.facebook.com/';
export const REDDIT_TOKEN_ENDPOINT =
  'https://www.reddit.com/api/v1/access_token';

export const SELECTORS = {
  messengerIcon:
    'path[d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"]',
  cookiePopup: 'div[data-testid="cookie-policy-manage-dialog"]',
  acceptEssentialCookies:
    'button[data-testid="cookie-policy-manage-dialog-accept-button"]',
  emailField: '#email',
  passwordField: '#pass',
  loginButton: 'button[name=login]',
  chatGroup: `[href="/messages/t`,
  messageInput: 'div div div div div div div div div[aria-label="Message"]',
  sendButton: 'div[aria-label="Press enter to send"][role="button"]',
  closeChatButton: 'div[aria-label="Close chat"][role="button"]',
  createPostButton: `div[aria-label="Create a post"][role="region"] > div > div`,
  createPostInput: `div[aria-label="What's on your mind, Dād?"][role="textbox"]`,
  postButton: `div[aria-label="Post"][role="button"]`,
};

# Facebook messenger dad-joke bot

A simple bot that posts the top dad joke of the day from `r/dadjokes` to a Facebook messenger thread:

![Screenshot](screenshot.png)

## Just for fun

This is made just for fun for my personal use in a group chat with my friends. **Use at your own risk**

## To use:

- Register to reddit
- Register an app to access the reddit API
- Create a Facebook account for the bot (Don't use your real one, because FB might block it for pulling these shenanigans)
- Get the thread ID you want the bot to post into. This can be either from the chat with a single person or from a group chat
- Add the bot to the group chat and/or make friend-requests if required
- Create a `credentials.json` file with the required details:

```json
{
  "FACEBOOK_USERNAME": "email@provider.com",
  "FACEBOOK_PASSWORD": "1234pa$$word",
  "REDDIT_ID": "reddit-app-id",
  "REDDIT_SECRET": "reddit-app-secret",
  "REDDIT_USER": "yoloSwag420",
  "REDDIT_PASSWORD": "1234pa$$word",
  "MESSENGER_CHAT_ID": "1234567891234567"
}
```

- Install dependencies by running

```
yarn
```

- Execute the script that makes the post by running

```shell
yarn start
```

- Optional - build the application by running

```shell
yarn build
```

then execute the transpiled javascript in `dist/src/index.js` at a cron job for max profit

## Technical details

### Reddit joke retrieval

A valid auth token needs to be generated each time before querying the reddit API. Both are done using `axios`

### Posting to Facebook Messenger

This was the tricky part, as `FB` is cracking down on all kinds of automated work on their application.

My previous approach of querying the `Messenger` API resulted in a ban for the account so I went with a more conservative approach.

The bot uses `puppeteer` to launch and control a chrome instance that logs in to a `Facebook` account and then posts a message to a chat group through the GUI.

I also added random `sleep` timeouts between actions to make sure the client-side components have finished loading and the actions seem a bit less "bot-like"

Still it might just be a matter of time until `FB` bans this incarnation as well

## [Previous incarnation](https://github.com/kputnins/dad-joke-bot)

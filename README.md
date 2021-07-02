# Open Source Express Webhook Server

You can use this repository as a template for your webhooks, this was made particularly for Discord Bots. There is just one premade webhook endpoint, but there will be more in the future.

# Instructions
## Clone the repository
You can clone through the Git CLI, or through Github Desktop. Method doesn't really matter
## Secrets
Once you clone the repository, open the `.env.example` file and fill in the required information. It should look something like this below (except the key's value should be changed)
```js
WEBHOOK_TOKEN=some_webhook_token
WEBHOOK_ID=InsertWebhookIDHere
REQUEST_AUTH=placeYourRequestAuthHere
TOPGG_WEBHOOK_ENDPOINT=InsertYourPathToWebhookHere // Leave empty if its '/dblwebhook'
DISCORDBOTLIST_WEBHOOK_ENDPOINT=InsertYourPathToWebhookHere // Leave empty if its '/dblistwebhook'
```
Once you fill out the information, **you must** rename the `.env.example` file to `.env`

## Dependencies
Run `npm install` to install the dependencies. 

## Deployment
Run `npm start` to start the server. You may additionally install a Process Manager, like `pm2` for restarting the app if it crashes: 
> `npm i -g pm2` then run `pm2 start index.js`

Its recommended you host the server locally first and test it before production.

## Custom webhooks
You can create your own webhook/endpoint for your needs, all you need to do is create another `js` file inside the `webhooks` directory and export the function.
```js
module.exports = async (app) => {
    await app.post(endpoint, async (request, response) => {
        // Your code here
    }
}
```

# Issues
To report issues or bugs, please create an issue in the Github repository.

# Contributing
You can contribute to this repository, by forking this project and opening a Pull Request. 
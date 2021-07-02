exports.SECRETS = {
	Request_Auth: process.env.REQUEST_AUTH, // Use this value to verify POST requests sent to your server
	DiscordBotList_Endpoint: process.env.DISCORDBOTLIST_WEBHOOK_ENDPOINT || '/dblistwebhook',
	Webhook_Token: process.env.WEBHOOK_TOKEN, // Discord Webhook token used when someone upvotes bot - Needed for constructing WebhookClient
	Webhook_ID: process.env.WEBHOOK_ID, // Discord Webhook ID used when someone upvotes bot - Needed for constructing WebhookClient
	Topgg_Endpoint: process.env.TOPGG_WEBHOOK_ENDPOINT || '/dblwebhook'
};



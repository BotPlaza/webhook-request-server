'use strict';

const { WebhookClient, MessageEmbed } = require("discord.js");
const { SECRETS } = require(`../util/constants`);


async function postData(user, website) {
	const hook = new WebhookClient(SECRETS.Webhook_ID, SECRETS.Webhook_Token);
	const voteEmbed = new MessageEmbed()
		.setColor(`#acfca4`)
		.setTitle(`Vote casted`)
		.addField(`Voter`, user || "Not specified")
		.addField(`Voted at`, website.toLowerCase() == 'topgg' ? `[Top.gg](https://top.gg/)` : `[DiscordBotList](https://discordbotlist.com/)`)
		.setTimestamp();
	
	await hook.send(voteEmbed);
};

module.exports = postData;
const { SECRETS } = require(`../util/constants`);
const voteHandler = require(`../workflows/vote`);

module.exports = (app) => {
	app.post(SECRETS.DiscordBotList_Endpoint, async (request, response) => {
		const [auth, timestamp] = request.headers['x-dbl-signature']
			? request.headers['x-dbl-signature'].split(/\s+/)
			: [null];

		if (auth !== SECRETS.Request_Auth || (Date.now() - 1000 * 120) < timestamp) {
			response.status(401).send({ status: 401 });
		};
		const body = JSON.parse(req.body);

		try {
			await voteHandler(body.id, 'discordbotlist')
		} catch (error) {
			console.error(error)
		};
	})
};
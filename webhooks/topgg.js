const { SECRETS } = require(`../util/constants`);
const voteHandler = require(`../workflows/vote`);

module.exports = async (app) => {
	await app.post(SECRETS.Topgg_Endpoint, async (request, response) => {
		/* Verify requests */
		if (!request.headers.authorization || request.headers.authorization !== SECRETS.Request_Auth) {
			return response.status(401).send({ status: 401 });
		};
		const body = JSON.parse(request.body);

		if (body.type !== 'upvote' && body.type !== 'test') { // "upvote" and "test" and the only types sent by Top.gg, may change in the future
			response.status(400).send({ status: 400, message: `Unknown type ${body.type}` });
			return
		};

		try {
			await voteHandler(body.user, 'topgg');
		} catch (error) {
			console.error(error)
		} finally {
			res.status(200).send({ status: 200 });
		}
	});
};
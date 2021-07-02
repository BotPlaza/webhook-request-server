const express = require('express');
const bodyParser = require('body-parser');

const webhooks = require('./endpoints');

const app = express();

app.use(bodyParser.text({ type: '*/*' }));

for (const hook of webhooks) {
    hook(app);
};


app.listen(3000, () => 
    console.log(`Webhook Server started on Port: 3000`)
);
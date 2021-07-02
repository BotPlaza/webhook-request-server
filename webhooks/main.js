module.exports = require('fs')
    .readdirSync(__dirname)
    .filter(file => file !== 'main.js')
    .map(file => require(`${__dirname}/${file}`));
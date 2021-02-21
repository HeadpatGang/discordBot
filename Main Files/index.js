const Discord = require('discord.js');
const checkForReactions = require('./checkForReactions');
const client = new Discord.Client()
const config = require('./config.json');

client.on('ready', () => {
    console.log('Client is ready')
    checkForReactions(client)
})

client.login(config.discordAuthToken)

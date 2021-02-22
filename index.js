const Discord = require('discord.js');
const checkForReactions = require('./checkForReactions');
const client = new Discord.Client()
const discordAuthToken = process.env.discordAuthToken;

client.on('ready', () => {
    console.log('Client is ready')
    checkForReactions(client)
})

client.login(discordAuthToken)

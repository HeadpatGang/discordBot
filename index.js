const Discord = require('discord.js');
const checkForReactions = require('./checkForReactions');
const client = new Discord.Client()
require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })
const discordAuthToken = process.env.discordAuthToken;

client.on('ready', () => {
    console.log('Client is ready')
    checkForReactions(client)
})

client.login(discordAuthToken)

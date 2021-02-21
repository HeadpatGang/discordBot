const Discord = require('discord.js');
const checkForReactions = require('./checkForReactions');
const client = new Discord.Client()
require('dotenv').config()

client.on('ready', () => {
    console.log('Client is ready')
    checkForReactions(client)
})

client.login(process.env.discordAuthToken)

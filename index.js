const Discord = require('discord.js');
const checkForReactions = require('./checkForReactions');
const checkForModIdea = require('./checkForModIdea');
const commandHandler = require('./commandHandler')
const noFortnite = require('./noFortnite')
const client = new Discord.Client()
//require('dotenv').config();
const discordAuthTokenBDB = process.env.discordAuthTokenBDB;
const discordAuthTokenSSB = process.env.discordAuthTokenSSB

client.on('ready', () => {
    console.log('Client is ready')
    checkForReactions(client)
    checkForModIdea(client)
    noFortnite(client)
    commandHandler(client)
})

client.login(discordAuthTokenBDB)

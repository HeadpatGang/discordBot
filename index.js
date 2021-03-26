const Discord = require('discord.js');
const checkForReactions = require('./checkForReactions');
const checkForModIdea = require('./checkForModIdea');
const noFortnite = require('./noFortnite');
const commandHandler = require('./commandHandler');
const deletedMessage = require('./deletedMessage');
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
    deletedMessage(client)
})

client.login(discordAuthTokenBDB)

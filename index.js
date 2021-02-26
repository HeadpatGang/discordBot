const Discord = require('discord.js');
const checkForReactions = require('./checkForReactions');
const client = new Discord.Client()
//require('dotenv').config();
const discordAuthTokenBDB = process.env.discordAuthTokenBDB;
const discordAuthTokenSSB = process.env.discordAuthTokenSSB

client.on('ready', () => {
    console.log('Client is ready')
    checkForReactions(client)
})

client.login(discordAuthTokenBDB)

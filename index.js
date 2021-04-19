const Discord = require('discord.js');
const { 
    checkForReactions, 
    checkForModIdea, 
    noBully, 
    commandHandler, 
    deletedMessage 
} = require('./modules');

const client = new Discord.Client();
//require('dotenv').config();
const discordAuthTokenBDB = "ODMzNjY4NTYyNjgxNTkzOTE2.YH1sWg.X6auJkZk8IZZeqGEJIHSBkqNPMw"; //process.env.discordAuthTokenBDB;
const discordAuthTokenSSB = process.env.discordAuthTokenSSB;

client.on('ready', () => {
    console.log(`Client is listening on ${client.guilds.cache.size} guilds`);
    checkForReactions(client);
    checkForModIdea(client);
    noBully(client);
    commandHandler(client);
    deletedMessage(client);
});

client.login(discordAuthTokenBDB);

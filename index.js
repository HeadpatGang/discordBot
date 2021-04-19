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
const discordAuthTokenBDB = process.env.discordAuthTokenBDB;
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

const Discord = require('discord.js');
const checkForReactions = require('./checkForReactions');
const client = new Discord.Client()
const config = require('./config.json');

client.on('ready', () => {
    console.log("Client is online\n" + "Client is now removing reactions.")
    client.channels.cache.get('812490492700393524').messages.fetch({limmit: 1})
        .then(messages => {
            var reactionMessage = messages.first();
            reactionMessage.reactions.removeAll();
        });
})

client.on('ready', () => {
    console.log('Client is ready')
    checkForReactions(client)
})

client.login(config.discordAuthToken)

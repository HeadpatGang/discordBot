const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('../config.json');
const sbChannelID = ['817843208490451034', '817843229181476924'];
const channelID = ['807377739007000658', '813790122944364574'];

module.exports = client => {
    client.commands = new Discord.Collection();

    const commandFolders = fs.readdirSync('./modules/commands');

    for(const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./modules/commands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`./commands/${folder}/${file}`);
            client.commands.set(command.name, command);
        }
    }

    client.on('message', message => {
        if(message.author.bot) return;
        if(!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/\r|\n| +/);
	    const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName)
		    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if(!command) return;
        if(command.args && !args.length) {
            let reply = `You did not provide any arguments for the ${commandName} command, ${message.author}\n This message will delete in 5 seconds`;
            message.delete();
            return message.channel.send(reply)
            .then(msg => {
                msg.delete({ timeout: 5000});
            })
            .catch();
        }
        for(let i = 0; i < channelID.length; i++) {
            if(message.channel.id === channelID[i]) {
                try {
                    command.execute(message, args);
                } catch (error) {
                    console.error(error);
                    message.reply(`There was an error trying to execute that command ${message.author}`);
                }
            }
        }
    })
};
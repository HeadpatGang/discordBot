const fs = require('fs')
const Discord = require('discord.js')
const { prefix } = require('./config.json');
const channelID = ['813831743994855484', '816610602164289546']

module.exports = client => {
    client.commands = new Discord.Collection();

    const commandFolders = fs.readdirSync('./commands');

    for(const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`./commands/${folder}/${file}`);
            client.commands.set(command.name, command);
        }
    }

    client.on('message', message => {
        if(message.author.bot) return;
        if(message.content.startsWith(prefix) && (message.content.length === 1)) return;
        if(!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/);
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
        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply(`There was an error trying to execute that command ${message.author}, if this persists please ping Jessica#7280`)
        }

        if(message.channel.id === '813831743994855484') {
            if(command.name === 'ui') {
                client.channels.cache.get('816610602164289546').send(message.content.slice(3))
            }
            
        }
    })
}
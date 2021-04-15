const { sandBoxOutputChannel, liveServerOutputChannel } = require('../../../config.json');
const Discord = require('discord.js');
module.exports = {
    name: 'ui',
    description: 'Makes a mod idea for a UI mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#46b9c0')
            .setTitle('UI')
            .setDescription(message.content.slice(3))
            .setFooter(`${message.author.tag}`);
        message.guild.channels.cache.get(liveServerOutputChannel).send(embedMessage);
    }
};
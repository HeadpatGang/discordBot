const { sandBoxOutputChannel, liveServerOutputChannel } = require('../../../config.json');
const Discord = require('discord.js');
module.exports = {
    name: 'naval',
    description: 'Makes a mod idea for a Naval mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#87CEFA')
            .setTitle('Naval')
            .setDescription(message.content.slice(6))
            .setFooter(`${message.author.tag}`);
        message.guild.channels.cache.get(liveServerOutputChannel).send(embedMessage);
    }
}
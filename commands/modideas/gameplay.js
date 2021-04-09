const { sandBoxOutputChannel, liveServerOutputChannel } = require('../../config.json');
const Discord = require('discord.js')
module.exports = {
    name: 'gameplay',
    description: 'Makes a mod idea for a Gameplay mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#FF1493')
            .setTitle('Gameplay')
            .setDescription(message.content.slice(9))
            .setFooter(`${message.author.tag}`)
        message.guild.channels.cache.get(liveServerOutputChannel).send(embedMessage)
    }
}
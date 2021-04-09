const { sandBoxOutputChannel, liveServerOutputChannel } = require('../../config.json');
const Discord = require('discord.js')
module.exports = {
    name: 'world',
    description: 'Makes a mod idea for a World mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#98FB98')
            .setTitle('World')
            .setDescription(message.content.slice(6))
            .setFooter(`${message.author.tag}`)
        message.guild.channels.cache.get(liveServerOutputChannel).send(embedMessage)
    }
}
const { sandBoxOutputChannel, liveServerOutputChannel } = require('../../config.json');
const Discord = require('discord.js')
module.exports = {
    name: 'server',
    description: 'Makes a mod idea for a Server mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#6495ED')
            .setTitle('Server')
            .setDescription(message.content.slice(7))
            .setFooter(`${message.author.tag}`)
        message.guild.channels.cache.get(liveServerOutputChannel).send(embedMessage)
    }
}
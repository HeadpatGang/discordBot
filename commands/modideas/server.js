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
        message.guild.channels.cache.get('807377739007000658').send(embedMessage)
    }
}
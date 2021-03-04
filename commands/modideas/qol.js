const Discord = require('discord.js')
module.exports = {
    name: 'qol',
    description: 'Makes a mod idea for a QoL mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#FFE4E1')
            .setTitle('QoL')
            .setDescription(message.content.slice(4))
            .setFooter(`${message.author.tag}`)
        message.channel.send(embedMessage)
    }
}
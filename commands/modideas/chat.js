const Discord = require('discord.js')
module.exports = {
    name: 'chat',
    description: 'Makes a mod idea for a Chat mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#00CED1')
            .setTitle('Chat')
            .setDescription(message.content.slice(5))
            .setFooter(`${message.author.tag}`)
        message.channel.send(embedMessage)
    }
}
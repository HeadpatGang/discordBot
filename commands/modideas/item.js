const Discord = require('discord.js')
module.exports = {
    name: 'item',
    description: 'Makes a mod idea for a Item mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#DC143C')
            .setTitle('Item')
            .setDescription(message.content.slice(5))
            .setFooter(`${message.author.tag}`)
        message.channel.send(embedMessage)
    }
}
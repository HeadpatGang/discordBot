const Discord = require('discord.js')
module.exports = {
    name: 'ui',
    description: 'Makes a mod idea for a UI mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('UI')
            .setDescription(message.content.slice(3))
            .setFooter(`${message.author.tag}`)
        message.channel.send(embedMessage)
    }
}
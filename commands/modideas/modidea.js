const Discord = require('discord.js')
module.exports = {
    name: 'modidea',
    description: 'Makes a mod idea for a modidea mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#6441a5')
            .setTitle(`${message.author.username}` + "'s Mod Idea")
            .setDescription(message.content.slice(9))
            .setFooter(`${message.author.tag}`)
        message.channel.send(embedMessage)
    }
}
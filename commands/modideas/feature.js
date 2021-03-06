const Discord = require('discord.js')
module.exports = {
    name: 'feature',
    description: 'Makes a mod idea for a Feature mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#FF00FF')
            .setTitle('Feature')
            .setDescription(message.content.slice(8))
            .setFooter(`${message.author.tag}`)
        message.guild.channels.cache.get('817843208490451034').send(embedMessage)
    }
}
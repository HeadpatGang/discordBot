const { sandBoxOutputChannel, liveServerOutputChannel } = require('../../config.json');
const Discord = require('discord.js')
module.exports = {
    name: 'npc',
    description: 'Makes a mod idea for a NPC mod',
    args: true,
    execute(message) {
        embedMessage = new Discord.MessageEmbed()
            .setColor('#00FA9A')
            .setTitle('NPC')
            .setDescription(message.content.slice(4))
            .setFooter(`${message.author.tag}`)
        message.guild.channels.cache.get(liveServerOutputChannel).send(embedMessage)
    }
}
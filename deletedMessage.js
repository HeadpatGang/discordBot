const Discord = require('discord.js')
const deleteLog = '824568452198694943'

module.exports = client => {
    client.on("messageDelete", async message => {
        let logs = await message.guild.fetchAuditLogs({type: 72});
        let entry = logs.entries.first();
        let channel = message.guild.channels.cache.get(deleteLog)
        let embed = new Discord.MessageEmbed()
            .setTitle("**Deleted Message**")
            .setColor('#FF0000')
            .setDescription('**Message**\n' +  message.content)
            .addFields(
                { name: '\u200B', value: '\u200B'},
                { name: 'Author', value: message.author.tag, inline: true},
                { name: 'Channel', value: message.channel, inline: true},
                { name: 'Executor', value: entry.executor, inline: true},
            )
            .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
            channel.send(embed);
    })
}

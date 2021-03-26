const Discord = require('discord.js')
const deleteLog = '824568452198694943'

module.exports = client => {
    client.on("messageDelete", async message => {
        const logs = await message.guild.fetchAuditLogs({type: 72});
        const entry = logs.entries.first();
        const { executor, target } = entry;
        const channel = message.guild.channels.cache.get(deleteLog)
        if(target.id === message.author.id) {
            executorTag = message.author.tag
        } else {
            executorTag = executor.tag
        }
        const embed = new Discord.MessageEmbed()
            .setTitle("**Deleted Message**")
            .setColor('#FF0000')
            .setDescription('**Message**\n' +  message.content)
            .addFields(
                { name: '\u200B', value: '\u200B'},
                { name: 'Author', value: message.author.tag, inline: true},
                { name: 'Channel', value: message.channel, inline: true},
                { name: 'Executor', value: executorTag, inline: true},
            )
            .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
            channel.send(embed);
    })
}

const Discord = require('discord.js')
const deleteLog = '824568452198694943'

module.exports = client => {
    client.on("messageDelete", async message => {
        let messageAuthor = message.author.id
        const logs = await message.guild.fetchAuditLogs({type: 72});
        const entry = logs.entries.first();
        const { executor, target } = entry;
        const channel = message.guild.channels.cache.get(deleteLog)
        executorTag = (target.id === messageAuthor)
            ? `<@${executor.id}>`
            : `<@${messageAuthor}>`
        const embed = new Discord.MessageEmbed()
            .setTitle("**Deleted Message**")
            .setColor('#FF0000')
            .setDescription('**Message**\n' +  message.content)
            .addFields(
                { name: '\u200B', value: '\u200B'},
                { name: 'Author', value: `<@${messageAuthor}>`, inline: true},
                { name: 'Channel', value: message.channel, inline: true},
                { name: 'Executor', value: executorTag, inline: true},
            )
            .setFooter(`Message ID: ${message.id} | Author ID: ${messageAuthor}`);
            channel.send(embed);
    })
}

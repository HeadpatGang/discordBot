const channelID = ['807377739007000658', '813790122944364574']
const sbchannelID = ['813831743994855484', '813844527294578730']

module.exports = client => {
    client.on('message', message => {
        if(message.author.bot) return;
        if(!message.channel.id === channelID) return;
        if(message.channel.id === channelID[0]) {
            if(!message.content.startsWith('!modidea')) {
                message.delete()
                message.reply('Please use !modidea for ideas')
            }
        } else if(message.channel.id === channelID[1]) {
            if(message.content.startsWith('!modidea')) {
                message.reply('Your modidea has been sent to ' + message.guild.channels.cache.get(channelID[0]).toString());
                let replyMessage = `${message} \nSent by ${message.author.toString()}`
                client.channels.cache.get(channelID[0]).send(replyMessage)
            }
        }
    })
}
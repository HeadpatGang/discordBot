const reactionMessage = require('./reactionMessage')

module.exports = client => {
    const channelID = '809476477321609306'

    const getEmojiName = (emojiName) =>
        client.emojis.cache.find((emoji) => emoji.name === emojiName)
    
    const reactionEmojis = {
        whale: 'whale',
        stinky: 'stinky',
        mymelodysad: 'mymelodysad',
        money: 'money',
        meow: 'meow'
    }

    const reactionOnMessage = []

    let messageText = 'React with the emoji for the role you wish to have \n\n'
    for (const key in reactionEmojis) {
        const emoji = getEmojiName(key)
        reactionOnMessage.push(emoji)
        const role = emoji[key]
        messageText += `${emoji} = ${role}\n`
    }
    reactionMessage(client, channelID, messageText, reactionOnMessage)
}



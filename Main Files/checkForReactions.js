const reactionMessage = require('./reactionMessage')

module.exports = client => {
    const channelID = '812490492700393524'

    const getEmojiName = (emojiName) =>
        client.emojis.cache.find((emoji) => emoji.name === emojiName)
    
    const reactionEmojis = {
        TwitchStreamer: 'Twitch Streamer',
        Harmony: 'Harmony',
        BepInEx: 'BepInEx',
        SlimVML: 'SlimVML',
        SlimVMLBetaTester: 'SlimVML-Beta-Tester'
    }

    const reactionOnMessage = []

    let messageText = 'React with the emoji for the role you wish to have \n\n'
    for (const key in reactionEmojis) {
        const emoji = getEmojiName(key)
        reactionOnMessage.push(emoji)

        const role = reactionEmojis[key]
        messageText += `${emoji} = ${role}\n`
    }
    reactionMessage(client, channelID, messageText, reactionOnMessage)

    //Quite literally everything under this I want to put into roleManager.js
    //The issue I ran into was trying to export the reactionEmoji's array listed above, kept giving me a "circular definition" failure.

    const handleReaction = (reaction, user, add) => {
    
        if (user.id === '809457454839627816') {
          return
        }
    
        const emoji = reaction._emoji.name
        const { guild } = reaction.message
        const roleName = reactionEmojis[emoji]
        if (!roleName) {
          return
        }
    
        const role = guild.roles.cache.find((role) => role.name === roleName)
        const member = guild.members.cache.find((member) => member.id === user.id)
    
        if (add) {
          member.roles.add(role)
        } else {
          member.roles.remove(role)
        }
      }
    
      client.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === '812490492700393524') {
          handleReaction(reaction, user, true)
        }
      })
    
      client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === '812490492700393524') {
            handleReaction(reaction, user, false)
        }
      })
}

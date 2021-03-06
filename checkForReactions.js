const reactionMessage = require('./reactionMessage')
const modDeveloperRole = '812412753628758057'
const roleToPing = ['807359030468018207', '821044073338896395']
const channelID = '812490492700393524'
const userIDSSB = '813804574128209951'
const userIDBDB = '809457454839627816'

module.exports = client => {
    const getEmojiName = (emojiName) =>
        client.emojis.cache.find((emoji) => emoji.name === emojiName)
    
    const reactionEmojis = {
        TwitchStreamer: 'Twitch Streamer',
        AssetCreator: 'Asset Creator',
        ModDeveloper: 'Mod Developer',
        Library: 'Library'
    }

    const reactionOnMessage = []

    let messageText = `React with the emoji for the role you wish to have. \nPlease note that everybody has access to view each category, only those whom have the corresponding role can type in them however.\n\n`
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
    
        if (user.id === userIDBDB || user.id === userIDSSB)  {
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
        if (reaction.message.channel.id === channelID) {
          handleReaction(reaction, user, true)
        }
      })
    
      client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === channelID) {
            handleReaction(reaction, user, false)
        }
      })
}

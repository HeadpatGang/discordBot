const channelID = ['807377739007000658'];

module.exports = client => {
    client.on('message', message => {
        if(!message.author.bot) return;
        
        if(message.channel.id === channelID[0]) {
            message.react("👍");
            message.react("👎");
        }
    });
};
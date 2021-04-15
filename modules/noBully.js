module.exports = client => {
    client.on('message', message => {
        if(message.content.toLowerCase().includes("fortnite")&& message.author.id === '213346955131092993') {
            message.react('814559639496425502')
        }
    });
};
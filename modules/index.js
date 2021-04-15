const checkForReactions = require('./modules/checkForReactions');
const checkForModIdea = require('./modules/checkForModIdea');
const noBully = require('./modules/noBully');
const commandHandler = require('./modules/commandHandler');
const deletedMessage = require('./modules/deletedMessage');

module.exports = {
    checkForReactions,
    checkForModIdea,
    noBully,
    commandHandler,
    deletedMessage
};
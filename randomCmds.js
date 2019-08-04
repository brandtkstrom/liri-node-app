const fs = require('fs');
const Logger = require('./logger');

const logger = new Logger();

function RandomProcessor() {
    const processCommandString = function(commandString) {
        // Verify content and format...
        if (!commandString || commandString === '') {
            logger.logError('null or missing command string');
        }
        // Split up command
        const commandParts = commandString.split(',');
        const command = commandParts[0];
        const commandArgs = commandParts.slice(1).join(' ');

        // Get command processor, then process
        const processor = process.commandFactory.getCommandProcessor(command);
        processor.process(commandArgs);
    };

    const processFile = function(content) {
        // Split content into command array
        const commandStrings = content.split('\n');
        if (commandStrings.length === 0) {
            // Nothing to do...
            return;
        }

        commandStrings.forEach(cs => processCommandString(cs));
    };

    this.process = function() {
        fs.readFile('random.txt', 'utf8', function(err, data) {
            if (err) {
                logger.logError('reading file random.txt', err);
                return;
            }

            processFile(data);
        });
    };
}

module.exports = RandomProcessor;

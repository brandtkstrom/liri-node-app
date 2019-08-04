// Import required modules
require('dotenv').config();
const LiriCommandFactory = require('./liriCmdFactory');

// Get command line args
const args = process.argv.slice(2);
const command = args[0];
const commandArg = args.slice(1).join(' ');

// Throw error if no LIRI command is given...
if (!command) {
    throw new Error('No command specified!');
}

// Retrieve appropriate processor
process.commandFactory = new LiriCommandFactory();
const commandProcessor = process.commandFactory.getCommandProcessor(command);

// Process the command
commandProcessor.process(commandArg);

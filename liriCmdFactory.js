const SpotifyProcessor = require('./musicCmds');
const MovieProcessor = require('./movieCmds');

// Maps a LIRI command to the associated command processor
function LiriCommandFactory() {
    this.getCommandProcessor = function(command) {
        switch (command) {
            case 'spotify-this-song':
                return new SpotifyProcessor();
            case 'movie-this':
                return new MovieProcessor();
            default:
                const error = `Invalid LIRI command: ${command}`;
                console.error(error);
                throw error;
        }
    };
}

module.exports = LiriCommandFactory;

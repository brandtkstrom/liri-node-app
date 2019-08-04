const SpotifyProcessor = require('./musicCmds');
const MovieProcessor = require('./movieCmds');
const ConcertProcessor = require('./concertCmds');
const RandomProcessor = require('./randomCmds');

// Maps a LIRI command to the associated command processor
function LiriCommandFactory() {
    this.getCommandProcessor = function(command) {
        switch (command) {
            case 'concert-this':
                return new ConcertProcessor();
            case 'spotify-this-song':
                return new SpotifyProcessor();
            case 'movie-this':
                return new MovieProcessor();
            case 'do-what-it-says':
                return new RandomProcessor();
            default:
                const error = `Invalid LIRI command: ${command}`;
                console.error(error);
                throw error;
        }
    };
}

module.exports = LiriCommandFactory;

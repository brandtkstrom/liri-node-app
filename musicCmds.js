const Spotify = require('node-spotify-api');
const keys = require('./keys');
const Logger = require('./logger');

const spotify = new Spotify(keys.spotify);
const logger = new Logger();

function SpotifyProcessor() {
    this.process = function(song) {
        spotify
            .search({ type: 'track', query: song, limit: 1 })
            .then(function(response) {
                const data = response.tracks.items[0];
                // Get preview url (if present)
                const preview = data.preview_url ? data.preview_url : 'N/A';
                // Create array with song info
                const songInfo = [
                    `Song: ${data.name}`,
                    `Artist(s): ${data.artists.map(a => a.name).join(', ')}`,
                    `Album: ${data.album.name}`,
                    `Preview URL: ${preview}`
                ];
                // Log song info
                logger.log(songInfo);
            })
            .catch(function(err) {
                logger.logError(`searching Spotify for song: ${song}`, err);
            });
    };
}

module.exports = SpotifyProcessor;

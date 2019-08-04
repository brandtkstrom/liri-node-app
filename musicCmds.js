const Spotify = require('node-spotify-api');
const keys = require('./keys');
const Logger = require('./logger');

const spotify = new Spotify(keys.spotify);
const logger = new Logger();

function SpotifyProcessor() {
    const spotifySearch = function(params) {
        spotify
            .search(params)
            .then(function(response) {
                let data = response.tracks.items[0];
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

    const defaultSong = function() {
        const songInfo = [
            'Song: The Sign',
            'Artist(s): Ace of Base',
            'Album: The Sign (US)',
            'URL: https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE'
        ];
        // Log song info
        logger.log(songInfo);
    };

    this.process = function(song) {
        // If no song is provided, do default search
        if (!song) {
            defaultSong();
        } else {
            spotifySearch({ type: 'track', query: song, limit: 1 });
        }
    };
}

module.exports = SpotifyProcessor;

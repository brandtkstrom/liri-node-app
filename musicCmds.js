const Spotify = require('node-spotify-api');
const keys = require('./keys');

const spotify = new Spotify(keys.spotify);

function SpotifyProcessor() {
    this.process = function(song) {
        spotify
            .search({ type: 'track', query: song, limit: 1 })
            .then(function(response) {
                const data = response.tracks.items[0];
                const preview = data.preview_url ? data.preview_url : 'N/A';
                const songInfo = [
                    `Song: ${data.name}`,
                    `Artist(s): ${data.artists.map(a => a.name).join(', ')}`,
                    `Album: ${data.album.name}`,
                    `Preview URL: ${preview}`
                ];
                // TODO - implement logger
                console.log(songInfo.join('\n'));
            })
            .catch(function(err) {
                console.log('Error searching Spotify for song: ', song);
                console.log(err);
            });
    };
}

module.exports = SpotifyProcessor;

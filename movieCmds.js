const keys = require('./keys');
const axios = require('axios');

const omdbUrl = `https://www.omdbapi.com/?&apikey=${keys.omdb.key}`;

/*
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

*/

function MovieProcessor() {
    this.process = function(movie) {
        const requestUrl = `${omdbUrl}&t=${movie ? movie : 'Mr. Nobody'}`;
        axios
            .get(requestUrl)
            .then(function(response) {
                const data = response.data;
                if (data.Error) {
                    console.log(`Error searching for movie: ${data.Error}`);
                } else {
                    const rtScoreIdx = data.Ratings.findIndex(
                        r => r.Source === 'Rotten Tomatoes'
                    );
                    const rtScore =
                        rtScoreIdx >= 0
                            ? data.Ratings[rtScoreIdx].Value
                            : 'N/A';
                    const movieInfo = [
                        `Title: ${data.Title}`,
                        `Year: ${data.Year}`,
                        `Rated: ${data.Rated}`,
                        `IMDB Rating: ${data.imdbRating}`,
                        `Rotten Tomatoes Rating: ${rtScore}`,
                        `Country: ${data.Country}`,
                        `Language: ${data.Language}`,
                        `Plot: ${data.Plot}`,
                        `Actors: ${data.Actors}`
                    ];
                    console.log(movieInfo.join('\n'));
                    // TODO use logger
                }
            })
            .catch(function(err) {
                console.log(`Error looking up movie: ${movie}`);
                console.log(err);
            });
    };
}

module.exports = MovieProcessor;

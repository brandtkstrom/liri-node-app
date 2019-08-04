const axios = require('axios');
const keys = require('./keys');
const Logger = require('./logger');

const logger = new Logger();
const omdbUrl = `https://www.omdbapi.com/?&apikey=${keys.omdb.key}`;

function MovieProcessor() {
    this.process = function(movie) {
        const requestUrl = `${omdbUrl}&t=${movie ? movie : 'Mr. Nobody'}`;
        axios
            .get(requestUrl)
            .then(function(response) {
                const data = response.data;
                if (data.Error) {
                    logger.logError(`Error searching for movie: ${data.Error}`);
                } else {
                    // Get Rotten Tomatoes score
                    const rtScoreIdx = data.Ratings.findIndex(
                        r => r.Source === 'Rotten Tomatoes'
                    );
                    const rtScore =
                        rtScoreIdx >= 0
                            ? data.Ratings[rtScoreIdx].Value
                            : 'N/A';
                    // Create array with movie info
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
                    // Log movie info
                    logger.log(movieInfo);
                }
            })
            .catch(function(err) {
                logger.logError(`looking up movie: ${movie}`, err);
            });
    };
}

module.exports = MovieProcessor;

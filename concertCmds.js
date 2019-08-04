const axios = require('axios');
const moment = require('moment');
const Logger = require('./logger');

const logger = new Logger();
const apiBase = 'https://rest.bandsintown.com/artists';
const apiParms = 'events?app_id=codingbootcamp';

function ConcertProcessor() {
    this.process = function(artist) {
        if (!artist || artist === '') {
            logger.logError('Artist name missing! Aborting...');
            return;
        }

        const requestUrl = `${apiBase}/${artist}/${apiParms}`;
        axios
            .get(requestUrl)
            .then(function(response) {
                const events = response.data;
                if (events.length === 0) {
                    logger.log(`No events found for artist: ${artist}.\n`);
                } else {
                    const eventsArray = [`Events found: ${events.length}\n`];
                    events.forEach(e => {
                        let region =
                            e.venue.region === ''
                                ? e.venue.country
                                : e.venue.region;
                        let location = `${e.venue.city}, ${region}`;
                        let date = moment(e.datetime).format('MM/DD/YYYY');
                        eventsArray.push(
                            `Venue: ${e.venue.name}`,
                            `Location: ${location}`,
                            `Date: ${date}`,
                            ''
                        );
                    });

                    logger.log(eventsArray);
                }
            })
            .catch(function(err) {
                logger.logError('searching for artist info', err);
            });
    };
}

module.exports = ConcertProcessor;

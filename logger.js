const fs = require('fs');
const separator = '\n--------------------\n';

function Logger() {
    // Logs the provided content to console and log.txt file.
    this.log = function(content) {
        // If content is an array, join elements to create string.
        let output = content + separator;
        if (Array.isArray(content)) {
            output = content.join('\n') + separator;
        }

        // Log to console
        console.log(output);

        // Output to file log.txt
        fs.appendFile('log.txt', output, function(err) {
            if (err) {
                console.log('Error writing to log file:');
                console.log(err);
            }
        });
    };

    this.logError = function(message, error) {
        console.log('Error:', message);
        if (error) {
            console.log(`${JSON.stringify(error)}`);
        }
        console.log(separator);
    };
}

module.exports = Logger;

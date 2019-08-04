# **LIRI Bot** :robot:

### LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data. See examples below.

## **Usage**

#### Before LIRI can function, it requires a .env file with the following API information defined:

-   SPOTIFY\_ID=_(Spotify App ID)_
-   SPOTIFY\_SECRET=_(Spotify API Key)_
-   OMDB\_KEY=_(OMDB API Key)_

#### LIRI will accept a command and optionally one argument. LIRI will process the given command and, if successful, will output the response to the console. If you lose this data - no worries! All of the responses are appended to a log file (log.txt). If no command is specified, LIRI will become angry and throw an error. Always give LIRI a **valid** command. LIRI is capable of processing the following commands:

-   #### spotify-this-song _(song)_
    -   Utilizes the Spotify API to lookup information for the specified song.
-   #### movie-this _(movie)_
    -   Looks up information for the specified movie using the OMDB API.
-   #### concert-this _(artist)_
    -   Finds upcoming events for the specified band/artist using the "Bands in Town Artist Events API".
-   #### do-what-it-says
    -   Reads the included random.txt file and performs each command specified. This allows LIRI to process a multiple commands at once. Each command should be on its own line, with a comma separating the command and associated argument e.g. "movie-this,finding nemo".

## **Code Overview Video**
[Watch on YouTube](https://www.youtube.com/watch?v=HxzYIU8l_fk)

## **Examples**

### LIRI will throw an error if no command is provided:

![no-command-error](https://media.giphy.com/media/MCXsBKXfJaL4UEuvRv/giphy.gif)

### Here LIRI is looking up song information:

![spotify-this-song](https://media.giphy.com/media/YOANXxJv70eTSwvXYp/giphy.gif)

### Here LIRI is looking up movie information:

![movie-this](https://media.giphy.com/media/KbTeqnI3NxJKgVb3y9/giphy.gif)

### LIRI performing a search for upcoming artist/band events:

![concert-this](https://media.giphy.com/media/J4aL1tMtAm7E1kDn8j/giphy.gif)

### Here LIRI is running the commands defined in random.txt:

_(You can see here that the output is also written to a log file: log.txt)_

![do-what-it-says](https://media.giphy.com/media/KHDUU127TuZjMeqRFo/giphy.gif)

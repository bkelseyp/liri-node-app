# liri-node-app
LIRI is a Language Interpretation and Recognition Interface.

#Video Walk-through
https://drive.google.com/file/d/1kYidElBehDQc2MyFYtoIW_52K-80vISK/view

# My Attempt:
I'm starting to gather that this is a very difficult assignment. I first started off by following the instructions provided by gitlab. I got towards the midpoint of making the axios call for OMDB. I'm starting to get confused and I'm mixing concepts for this past week, to this current week lectures. I believe I need to take a step back and logically think about this before I jump right in and start coding. 

# Need To Do:
send requests using axios package to the the following APIs:
- Bands in Town 
- Spotify  npm install --save node-spotify-api
- OMDB 

# Pseudocoding 101
OMDB 
1. get JSON responses for OMBD working.
- figure out how to add the title to the response so that it changes with every input.
- have the response return the following:
// * Title of the movie. // * Year the movie came out. // * IMDB Rating of the movie. // * Rotten Tomatoes Rating of the movie. // * Country where the movie was produced. // * Language of the movie. // * Plot of the movie. // * Actors in the movie.
2. have this response return when someone input the movie title via process.arg[2] or some other way.
3. add an error check. if statement, if the user doesn't input, push  'Mr. Nobody.' as the answer. Finally, return that data for the movie. 

Bands In Town
1. using this api request: ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
2. return this data: 
- Name of the venue
- Venue location
- Date of the Event 
3. for the date, add moment npm and format the date to "MM/DD/YYYY"

spotify
1. using the spotiry api, the data should respond with:
- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from
2. add error check: If no song is provided then your program will default to "The Sign" by Ace of Base.

random:
1. Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. 
- It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt. 
- Edit the text in random.txt to test out the feature for movie-this and concert-this.


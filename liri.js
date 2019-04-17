require("dotenv").config();
var keys = require("./keys.js");
var Spoti = require('node-spotify-api');
var spotifyKey = new Spoti(keys.spotify);
var fs = require("fs");

const inputAnswer = process.argv[2];
const inputQuery = process.argv[3];
//const inputQuery = process.argv.splice(3).join(".");


function inputCommand(inputAnswer) {
    // make a decision based on the command
    // not sure if i need a second input..,.
    switch (inputAnswer) {
        case "concert-this":
            console.log("Concert data");
            console.log("--------------------\n");
            concertThis();
            break;
        case "spotify-this":
            console.log("spotify data");
            console.log("--------------------\n");
            spotifyThisSong();
            break;
        case "movie-this":
            console.log("Movie data");
            console.log("--------------------\n");
            movieThis();
            break;
        case "do-this":
            console.log("Do This data");
            console.log("\n------------------\n");
            doThis(inputAnswer);
            break;
    }
};
inputCommand(inputAnswer);
// REMEBER to add the Error, to an if statement
function concertThis() {
    var axios = require("axios");
    var nodeInput1 = process.argv[3];
    var artistName = nodeInput1;
    var divider = ("\n----------------------------\n");

    var queryURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
    console.log(queryURL);

    axios.get(queryURL).then(
        function (response) {
            for (var i = 0; i < response.length; i++) {
                console.log(response.data[i]);
            }
            var searchConcert = response.data[i];
            var moment = require('moment');
            var concertDate = moment(searchConcert.datetime).format('MMMM Do YYYY, h:mm:ss A');
            var consertingyData = [
                "Artist: " + searchConcert.lineup,
                "Venue: " + searchConcert.venue.name,
                "Location: (Latitude) " + searchConcert.venue.latitude,
                "Date: " + concertDate
            ].join("\n\n");
            fs.appendFile("log.txt", consertingyData + divider, function (err) {
                if (err) throw err;
                console.log(consertingyData);
            });

        }
    );
};

function spotifyThisSong() {
    var divider = ("\n----------------------------\n");

    spotifyKey.search({ type: 'track', query: inputAnswer, limit: 1, available_markets: 'US' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var searchItems = data.tracks;
        var spotingyData = [
            "Artist: " + JSON.stringify(searchItems.items[0].album.artists[0].name, null, 2),
            "Song: " + JSON.stringify(searchItems.items[0].name, null, 2),
            "Preview Song: " + JSON.stringify(searchItems.items[0].preview_url, null, 2),
            "Album: " + JSON.stringify(searchItems.items[0].album.name, null, 2)
        ].join("\n\n");
        fs.appendFile("log.txt", spotingyData + divider, function (err) {
            if (err) throw err;
            console.log(spotingyData);
        });
    });


};
function movieThis() {
    var divider = ("\n----------------------------\n");
    var axios = require("axios");
    const nodeInputs = process.argv[3];
    //const movieName = "";
    // if (!nodeInputs) {
    //     nodeInputs = 'Mr. Nobody';
    // }
    const queryURL = "http://www.omdbapi.com/?t=" + nodeInputs + "&y=&plot=short&apikey=8ab6c4ed";
    console.log(queryURL);
    axios.get(queryURL).then(
        function (response) {

            var omdbData = response.data;
            var omdbDataObj = [
                "Title: " + omdbData.Title,
                "Year: " + omdbData.Year,
                "IMDB Rating: " + omdbData.Ratings[1].Value,
                "Rotten Tomatoes Rating: " + omdbData.Ratings[2].Value,
                "Country: " + omdbData.Country,
                "Language: " + omdbData.Language,
                "Plot: " + omdbData.Plot,
                "Actors: " + omdbData.Actors
            ].join("\n\n");
            fs.appendFile("log.txt", omdbDataObj + divider, function (err) {
                if (err) throw err;
                console.log(omdbDataObj);
            });
        }
    );
};

function doThis() {

    var allCalls = () => {
        console.log("Running All Calls");
        movieThis();
        spotifyThisSong();
        concertThis();
    };
    allCalls();

    fs.appendFile("log.txt", function (err) {
        if (err) throw err;
        console.log(omdbDataObj);
    });

};



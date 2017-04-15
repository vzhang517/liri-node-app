var key = require("./key.js");
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");

var action = process.argv[2];
var nodeArgs = process.argv;

var client= new twitter(key.twitterKeys);



switch (action) {
  case "mytweets":
    total();
    break;

  case "spotifythissong":
    deposit();
    break;

  case "moviethis":
    withdraw();
    break;

  case "dowhatitsays":
    lotto();
    break;
}


function mytweets(){

	client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
	   console.log(tweets);
	});

}



function spotifythissong () {

	var songName = "";


	for (var i = 3; i < nodeArgs.length; i++) {

		songName = songName + nodeArgs[i];


	}


	spotify.search({ type: 'track', query: songName }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 

	});

}




function moviethis() {




	var movieName = "";


	for (var i = 2; i < nodeArgs.length; i++) {

	  if (i > 2 && i < nodeArgs.length) {

	    movieName = movieName + "+" + nodeArgs[i];

	  }

	  else {

	    movieName += nodeArgs[i];

	  }
	}



var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";




request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
  }
});
}





function dowhatitsays(){

}
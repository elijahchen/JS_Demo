//movieDB
// Create an array of movie objects. Each movie should have a title, rating, and hasWatched properties. Itereate through the array and print out something that looks like:
// You have watched "In Bruges" - 5 stars
// You have not seen "Frozen" - 4.5 stars
// You have seen "Mad Max Fury Road" - 5 stars
// You have not seen "Les Miserables" - 3.5 stars

var movies = [
	{
		title: "The Lion King", 
		hasWatched: true, 
		rating: 5
	},
	{
		title: "Frozen",
		hasWatched: false,
		rating: 4.5
	},
	{
		title: "Les Miserables",
		hasWatched: false;
		rating: 3.5
	}
]


function buildString(movie){
	var result = "You have ";

	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
	}
}

movies.forEach(function(movie){
	console.log(buildString(movie));
});

document.addEventListener('DOMContentLoaded', function(){
	//code here
});

function renderMovies(movieArray){

let movieHtmlArray = movieArray.map(function(currentMovie)){
	return `<div> 
	<h2>${currentMovie.Title}</h2></div>`
});

return movieHtmlArray.join('');
function enterMovie(){
	//This div will contain movie info
	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", "newDiv");

	var category = ["title", "genre"];
	var input_array = [];
	//put inputs into array
	for(var i=0; i < category.length; i++) {
		var input = document.getElementById(category[i]);
		input_array[i] = input;
	}

	//This div will contain all movie info
	// var newDiv = document.createElement("div");
	// newDiv.setAttribute("class", "row");
	// newDiv.setAttribute("id", "newDiv");
	//This div will contain the image
	var imageDiv = document.createElement("div");
	imageDiv.setAttribute("class", "col-md-7");
	var imageAnchor = document.createElement("a");
	imageAnchor.setAttribute("href", "#");
	var image = document.createElement("img");
	image.setAttribute("class", "img-responsive");
	image.setAttribute("id", "movie_imgae");
	image.setAttribute("src", "http://www.unomaha.edu/news/2014/05/events/movie.jpg");
	image.setAttribute("alt", "");
	imageAnchor.appendChild(image);
	imageDiv.appendChild(imageAnchor);

	newDiv.appendChild(imageDiv);

	//This div will contain all other movie infos
	var infoDiv = document.createElement("div");
	infoDiv.setAttribute("class", "col-md-5");
	//get title
	var title = document.createElement("H3");
	var title_text = document.createTextNode(input_array[0].value);
	title.appendChild(title_text);
	//get genre
	var genre = document.createElement("H4");
	var genre_text = document.createTextNode(input_array[1].value);
	genre.appendChild(genre_text);

	infoDiv.appendChild(title);
	infoDiv.appendChild(genre);

	newDiv.appendChild(infoDiv);


/*
	//append inputs into new div 
	for(var i=0; i < category.length; i++) {
		var tag = document.createElement('H1');
		var input = input_array[i].value;
		var t = document.createTextNode(input);
		tag.appendChild(t);
		newDiv.appendChild(tag); //putting input into new div
	}
*/


	//post new div to html --> post in different div later (have 2~3 different divs)
	var board = document.getElementById('board');
	board.appendChild(newDiv);

    return false;
}
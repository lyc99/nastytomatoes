function enterMovie(){
	var category = ["title", "genre"];
	var input_array = [];
	//put inputs into array
	for(var i=0; i < category.length; i++) {
		var input = document.getElementById(category[i]);
		input_array[i] = input;
	}

	//var dynamicRow = document.getElementById("dynamicRow");
	var dynamicRow = document.createElement("div");
	dynamicRow.setAttribute("class", "row");

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
	image.setAttribute("src", "http://i0.wp.com/bitcast-a-sm.bitgravity.com/slashfilm/wp/wp-content/images/Lego-Batman-movie-700x300.jpg?resize=700%2C300");
	image.setAttribute("alt", "");
	imageAnchor.appendChild(image);
	imageDiv.appendChild(imageAnchor);

	dynamicRow.appendChild(imageDiv);

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

	var line = document.createElement("HR");

	dynamicRow.appendChild(infoDiv);

	var containDiv = document.getElementById("containDiv");

	containDiv.appendChild(dynamicRow);
	containDiv.appendChild(line);



    return false;
}
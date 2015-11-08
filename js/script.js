var index = 0;
function enterMovie(){
	var category = ["title", "year", "genre", "actors", "rating", "poster"];
	var input_array = [];
	//put inputs into array
	for(var i=0; i < category.length; i++) {
		var input = document.getElementById(category[i]);
		input_array[i] = input;
	}

	//var dynamicRow = document.getElementById("dynamicRow");
	var dynamicRow = document.createElement("div");
	dynamicRow.setAttribute("class", "row");
	dynamicRow.setAttribute("id", "dynamicRow"+index);

	//This div will contain the image
	var imageDiv = set_poster(input_array[5].value);

	dynamicRow.appendChild(imageDiv);

	//This div will contain all other movie infos
	var infoDiv = document.createElement("div");
	infoDiv.setAttribute("class", "col-md-5");

	//get title
	var title = set_title(input_array[0].value);
	//get year
	var year = set_year(input_array[1].value);
	//get genre
	var genre = set_genre(input_array[2].value);
	//get actors
	var actors = set_actors(input_array[3].value);
	//this line goes under the dynamic row
	var line = document.createElement("HR");
	line.setAttribute("id", "line"+index);
	//delete button
	var delete_button = set_delete_button(dynamicRow, line);


	infoDiv.appendChild(title);
	infoDiv.appendChild(year);
	infoDiv.appendChild(genre);
	infoDiv.appendChild(actors);
	infoDiv.appendChild(delete_button);



	dynamicRow.appendChild(infoDiv);

	var containDiv = document.getElementById("containDiv");

	containDiv.appendChild(dynamicRow);
	containDiv.appendChild(line);

	index = index + 1;

    return false;
}
function set_delete_button(dynamicRow, line) {
	var button = document.createElement('submit');
	button.setAttribute("class", "btn btn-primary");
	var button_text = document.createTextNode("Delete");
	//add delete functionality
	button.onclick = function() {
		var divId = dynamicRow.getAttribute("id");
		$("#"+divId).remove();
		var lineID = line.getAttribute("id");
		$("#"+lineID).remove();
	};
	button.appendChild(button_text);
	return button;
}
function set_actors(a) {
	var actors = document.createElement("P");
	var actors_text = document.createTextNode("Cast: " + a);
	
	actors.appendChild(actors_text);
	return actors;
}
function set_genre(g) {
	var genre = document.createElement("H4");
	if(g == "") {
		var genre_text = document.createTextNode("-");
	}
	else {
		var genre_text = document.createTextNode(g);
	}
	genre.appendChild(genre_text);	
	return genre;
}
function set_year(y) {
	var year = document.createElement("H4");
	if(y == "") {
		var year_text = document.createTextNode("-");
	}
	else {
		var year_text = document.createTextNode(y);
	}
	year.appendChild(year_text);
	return year;
}
function set_title(t) {
	var title = document.createElement("H3");
	var title_text = document.createTextNode(t);
	title.appendChild(title_text);
	return title;
}

function set_poster(poster_link) {
	var imageDiv = document.createElement("div");
	imageDiv.setAttribute("class", "col-md-7");
	var imageAnchor = document.createElement("a");
	imageAnchor.setAttribute("href", "#");
	var image = document.createElement("img");
	image.setAttribute("class", "img-responsive");
	image.setAttribute("id", "movie_imgae");
	if(poster_link == "") {
		image.setAttribute("src", "http://i0.wp.com/bitcast-a-sm.bitgravity.com/slashfilm/wp/wp-content/images/Lego-Batman-movie-700x300.jpg?resize=700%2C300");
	}
	else {
		image.setAttribute("src", poster_link);
	}
	image.setAttribute("alt", "");
	image.style.height = '300px';
	image.style.width = '700px';
	imageAnchor.appendChild(image);
	imageDiv.appendChild(imageAnchor);
	return imageDiv;
}
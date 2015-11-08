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
	//get rating
	var rating = set_rating(input_array[4].value);
	//this line goes under the dynamic row
	var line = document.createElement("HR");
	line.setAttribute("id", "line"+index);
	//delete button
	var delete_button = set_delete_button(dynamicRow, line);

	//update dialog input texts
	var update_dialog = set_update_dialog();

	//update button 
	var update_botton = set_update_button(update_dialog);

	//put all elements into infoDiv
	infoDiv.appendChild(title);
	infoDiv.appendChild(year);
	infoDiv.appendChild(genre);
	infoDiv.appendChild(actors);
	infoDiv.appendChild(rating);
	infoDiv.appendChild(delete_button);
	infoDiv.appendChild(document.createTextNode(" "));
	infoDiv.appendChild(update_botton);
	//put infoDiv into dynamicRow
	dynamicRow.appendChild(infoDiv);
	//containDiv holds all the movies
	var containDiv = document.getElementById("containDiv");
	//add movie and add a line to separate between movies as well
	containDiv.appendChild(dynamicRow);
	containDiv.appendChild(line);
	//increment index so different dynamicRow's have different id's
	index = index + 1;

    return false;
}
function set_rating(r) {
	var rating = document.createElement("H4");
	if(r == "") {
		var rating_text = document.createTextNode("Rating: /5");
	}
	else {
		var rating_text = document.createTextNode("Rating: "+r+"/5");
	}
	rating.appendChild(rating_text);
	return rating;
}

function set_update_button(update_dialog) {
	var button = document.createElement('submit');
	button.setAttribute("class", "btn btn-primary");
	var button_text = document.createTextNode("Update");
	button.appendChild(button_text);
	button.onclick = function() {
		$(update_dialog).dialog();
	}
	return button;
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
function set_update_dialog() {
	var update_dialog = document.createElement("div");
	update_dialog.setAttribute("id", "dialog");
	//Title
	var t = document.createTextNode("Title: ");
	update_dialog.appendChild(t);
	var title_input = document.createElement("input");
	title_input.type = "text";
	title_input.setAttribute("id", "updated_title");
	update_dialog.appendChild(title_input);
	//Year
	var y = document.createTextNode("Year: ");
	update_dialog.appendChild(y);
	var year_input = document.createElement("input");
	year_input.type = "text";
	year_input.setAttribute("id", "updated_year");
	update_dialog.appendChild(year_input);
	//Genre
	var g = document.createTextNode("Genre: ");
	update_dialog.appendChild(g);
	var genre_input = document.createElement("input");
	genre_input.type = "text";
	genre_input.setAttribute("id", "updated_genre");
	update_dialog.appendChild(genre_input);
	//Actors
	var a = document.createTextNode("Actors: ");
	update_dialog.appendChild(a);
	var actors_input = document.createElement("input");
	actors_input.type = "text";
	actors_input.setAttribute("id", "updated_actors");
	update_dialog.appendChild(actors_input);


	return update_dialog;
}
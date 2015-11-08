var index = 0;
function enterMovie() {
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
	var title = set_title(input_array[0].value, index);
	//get year
	var year = set_year(input_array[1].value, index);
	//get genre
	var genre = set_genre(input_array[2].value, index);
	//get actors
	var actors = set_actors(input_array[3].value, index);
	//get rating
	var rating = set_rating(input_array[4].value, index);
	//this line goes under the dynamic row
	var line = document.createElement("HR");
	line.setAttribute("id", "line"+index);
	//delete button
	var delete_button = set_delete_button(dynamicRow, line);

	// //update dialog input texts
	// var update_dialog = set_update_dialog(index);
	// //update button 
	// var update_botton = set_update_button(update_dialog, index);

	//put all elements into infoDiv
	infoDiv.appendChild(title);
	infoDiv.appendChild(year);
	infoDiv.appendChild(genre);
	infoDiv.appendChild(actors);
	infoDiv.appendChild(rating);
	infoDiv.appendChild(delete_button);
	infoDiv.appendChild(document.createTextNode(" "));
	//infoDiv.appendChild(update_botton);
	//put infoDiv into dynamicRow
	dynamicRow.appendChild(infoDiv);
	//containDiv holds all the movies
	var containDiv = document.getElementById("containDiv");
	//add movie and add a line to separate between movies as well
	containDiv.appendChild(dynamicRow);
	containDiv.appendChild(line);

	//update dialog input texts
	var update_dialog = set_update_dialog(index);
	//update button 
	var update_botton = set_update_button(update_dialog, index);
	infoDiv.appendChild(update_botton);

	//increment index so different elements have different id's
	index = index + 1;

	//reset inputs to blank for next round
	for(var i=0; i < category.length; i++) {
		var input = document.getElementById(category[i]);
		input.value = "";
	}

    return false;
}
function set_update_button(update_dialog, index) {
	var button = document.createElement('submit');
	button.setAttribute("class", "btn btn-primary");
	var button_text = document.createTextNode("Update");
	button.appendChild(button_text);

	button.onclick = function() {
		$(update_dialog).dialog({
			modal: true,
			buttons: {
				"Update": function() {
					var currentTitle = document.getElementById("title"+index);
					currentTitle.innerText = document.getElementById("updated_title"+index).value;
					var currentYear = document.getElementById("year"+index);
					currentYear.innerText = document.getElementById("updated_year"+index).value;
					var currentGenre = document.getElementById("genre"+index);
					currentGenre.innerText = document.getElementById("updated_genre"+index).value;
					var currentActors = document.getElementById("actors"+index);
					currentActors.innerText = "Cast: "+document.getElementById("updated_actors"+index).value;
					var currentRating = document.getElementById("rating"+index);
					currentRating.innerText = "Rating: "+document.getElementById("updated_rating"+index).value+"/5";
				},
				"Close": function() {
					$(this).dialog("close");
				}
			}
		});
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
function set_rating(r, index) {
	var rating = document.createElement("H4");
	rating.setAttribute("id", "rating"+index);
	if(r == "") {
		var rating_text = document.createTextNode("Rating: /5");
	}
	else {
		var rating_text = document.createTextNode("Rating: "+r+"/5");
	}
	rating.appendChild(rating_text);
	return rating;
}
function set_actors(a, index) {
	var actors = document.createElement("P");
	actors.setAttribute("id", "actors"+index);
	//if(a == "") {
		//var actors_text = document.createTextNode("Cast: ");
	//}
	//else {
		var actors_text = document.createTextNode("Cast: " + a);
	//}
	actors.appendChild(actors_text);
	return actors;
}
function set_genre(g, index) {
	var genre = document.createElement("H4");
	genre.setAttribute("id", "genre"+index);
	if(g == "") {
		var genre_text = document.createTextNode("-");
	}
	else {
		var genre_text = document.createTextNode(g);
	}
	genre.appendChild(genre_text);	
	return genre;
}
function set_year(y, index) {
	var year = document.createElement("H4");
	year.setAttribute("id", "year"+index);
	if(y == "") {
		var year_text = document.createTextNode("-");
	}
	else {
		var year_text = document.createTextNode(y);
	}
	year.appendChild(year_text);
	return year;
}
function set_title(t, index) {
	var title = document.createElement("H3");
	title.setAttribute("id", "title"+index);
	if(t == "") {
		var title_text = document.createTextNode("-");
	}
	else {
		var title_text = document.createTextNode(t);
	}
	title.appendChild(title_text);
	return title;
}

function set_poster(poster_link, index) {
	var imageDiv = document.createElement("div");
	imageDiv.setAttribute("class", "col-md-7");
	var imageAnchor = document.createElement("a");
	imageAnchor.setAttribute("href", "#");
	var image = document.createElement("img");
	image.setAttribute("class", "img-responsive");
	image.setAttribute("id", "movie_image"+index);
	if(poster_link == "") {
		image.setAttribute("src", "http://texasmisa.com/wp-content/uploads/2014/11/movie-night-hd_main.jpg");
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
function set_update_dialog(index) {
	var update_dialog = document.createElement("div");
	update_dialog.setAttribute("id", "dialog");
	update_dialog.setAttribute("title", "Update Info");
	//Title
	var t = document.createTextNode("Title: ");
	update_dialog.appendChild(t);
	var title_input = document.createElement("input");
	title_input.type = "text";
	title_input.setAttribute("id", "updated_title"+index);
	//set default value for title
	title_input.value = document.getElementById("title"+index).innerText;
	update_dialog.appendChild(title_input);
	//Year
	var y = document.createTextNode("Year: ");
	update_dialog.appendChild(y);
	var year_input = document.createElement("input");
	year_input.type = "text";
	year_input.setAttribute("id", "updated_year"+index);
	//set default value for year
	year_input.value = document.getElementById("year"+index).innerText;
	update_dialog.appendChild(year_input);
	//Genre
	var g = document.createTextNode("Genre: ");
	update_dialog.appendChild(g);
	var genre_input = document.createElement("input");
	genre_input.type = "text";
	genre_input.setAttribute("id", "updated_genre"+index);
	//set default value for genre
	genre_input.value = document.getElementById("genre"+index).innerText;
	update_dialog.appendChild(genre_input);
	//Actors
	var a = document.createTextNode("Actors: ");
	update_dialog.appendChild(a);
	var actors_input = document.createElement("input");
	actors_input.type = "text";
	actors_input.setAttribute("id", "updated_actors"+index);
	//set default value for actors
	if(document.getElementById("actors"+index).innerText == 'Cast:') {
		actors_input.value = "";
	}
	else {
		actors_input.value = document.getElementById("actors"+index).innerText.replace('Cast: ', '');
	}
	update_dialog.appendChild(actors_input);
	//Rating
	var r = document.createTextNode("Rating: ");
	update_dialog.appendChild(r);
	var rating_input = document.createElement("input");
	rating_input.type = "text";
	rating_input.setAttribute("id", "updated_rating"+index);
	//set default value for rating
	if(document.getElementById("rating"+index).innerText == 'Rating: /5') {
		rating_input.value = "";
	}
	else {
		rating_input.value = document.getElementById("rating"+index).innerText.charAt(8);
	}
	update_dialog.appendChild(rating_input);

	return update_dialog;
}
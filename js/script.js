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
	//append inputs into new div 
	for(var i=0; i < category.length; i++) {
		var tag = document.createElement('H1');
		var input = input_array[i].value;
		var t = document.createTextNode(input);
		tag.appendChild(t);
		newDiv.appendChild(tag); //putting input into new div
	}
	//post new div to html --> post in different div later (have 2~3 different divs)
	var board = document.getElementById('board');
	board.appendChild(newDiv);

    return false;
}
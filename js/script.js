function enterMovie(){
	//alert('hey');
	var newDiv = document.createElement("div");
	var tag = document.createElement('H1');
	//replace 'Title man' with actual title (fetch it from input) 
	var t = document.createTextNode('Title man');
	tag.appendChild(t);

	//var newContent = document.createTextNode("hi there");
	newDiv.appendChild(tag);


	var board = document.getElementById('board');
	//document.body.insertBefore(newDiv, board);
	board.appendChild(newDiv);

	//var data = document.getElementById('dynamicInput');


	//board.appendChild(data);
	//var v = $("#dynamicInput :input");
    //board.innerHTML = v.movie;
    //var v = $('#title').val();
    //alert('e');

    return false;
}
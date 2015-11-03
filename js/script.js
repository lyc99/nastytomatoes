function enterMovie(){
	//alert('hey');
	var newDiv = document.createElement("div");
	var newContent = document.createTextNode("hi there");
	newDiv.appendChild(newContent);

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
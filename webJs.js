// Get the modal
var modal = document.getElementById('myModal');

function fullScreen(img){
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var image = document.getElementsByClassName("myImg")[img];
	var modalImg = document.getElementById("img01");
  	modal.style.display = "block";
  	modalImg.src = image.src ;
	
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
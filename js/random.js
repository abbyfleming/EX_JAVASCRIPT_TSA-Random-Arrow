

function determineArrow(){
	var output = document.getElementById("output");
	var random = Math.round(Math.random());

	if (random === 1) {
		output.innerHTML = "<img src= 'img/right.png'>"
	} else {
		output.innerHTML = "<img src= 'img/left.png'>"
	}

} 

window.addEventListener("click", determineArrow);
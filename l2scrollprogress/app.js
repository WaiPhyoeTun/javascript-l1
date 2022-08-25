var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
	scrollpoint();
};

function scrollpoint(){
	// console.log('hey i am working');

	// scrolltop 
	// project height
	// current|client height

	// project height - current height

	// scrolltop * 100 / (project height - current height)

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);  //kayi yae velocity
	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);  //kayi yae distance
	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);  //kayi yat tae nayyar ko count lote

	var calcheight = getscrollheight - getclientheight;
	// var getfinal = Math.round(getscrolltop * 100 / calcheight);
	// console.log(getfinal);

	var getfinal = Math.round((getscrolltop / calcheight) * 100);
	console.log(getfinal);

	getprogressbar.style.width = `${getfinal}%`;
};	

function printme(){
	window.print()
};
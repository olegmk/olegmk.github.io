function fcode(){
	selector.addEventListener("click", function(){
	var URI = "http://api.openweathermap.org/data/2.5/weather?id";
	var CODE = "eb0e999708d3c56298b0afb9fc4c2815";
	var wdata = new XMLHttpRequest();

	/*if (xnr.length == 0){
		return console.log("xnr is empty");
		}	*/
	wdata.open("GET", URI + city.value +"&units=metric&appid=" + CODE, true);

	alert(URI + city.value + "&units=metric&appid=" + CODE);
	wdata.send();

	console.log(wdata.status);
});

}


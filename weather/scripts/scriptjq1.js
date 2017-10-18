$(document).ready(function(){
	$("#task").click(function(){
		if ($("#city").val() == ""){
			console.log("Помилка");
			return;
		} 

		function getWeather(callback){
		var URI = "https://api.openweathermap.org/data/2.5/weather?id=";
		var CODE = "eb0e999708d3c56298b0afb9fc4c2815";				
		var URL = (URI + $("#city").val() + "&appid=" + CODE);
		console.log(URL);
		$.ajax({
			url: (URI + $("#city").val() + "&appid=" + CODE),
			type: "GET",
		//	datatype: "jsonp",
			success: callback
			/*	success: function(data) {
          		$("#task").append("<h1>" + data.main.temp + "</h1>");
              }*/
          });
		};
	
	getWeather(function (data) {
		//console.log('weather data received');
    	//console.log(data.main.temp);
    	$("#result").empty();
    	$("#result").append("<h3>Місто - " + data.name + "</h3>");
     	$("#result").append("<h3>Температура - " + data.main.temp + "</h3>");
     	$("#result").append("<h3>Тиск - " + data.main.pressure + "</h3>");
     	$("#result").append("<h3>Вологість - " + data.main.humidity + "</h3>");
     	/*$("#result").click(function() {
			$(this).html('');
			});*/
	});
});
});

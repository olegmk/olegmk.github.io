
$(document).ready(function(){
	$("#task").click(function(){
		if ($("#city").val() == 0){
			console.log("Помилка місто");
			return;
		} 
		if ($("#day").val() == 0){
			console.log("Помилка кількості днів");
			return;
		} 

		if ($("#day").val() === "one"){
			var weatherday = "weather"
			getWeather(dateweather);
			console.log(weatherday);
		} else {
			var weatherday = "forecast";	
			getWeather(dateweather);
			console.log(weatherday);
		}

		//if ()
		//var weatherday = "weather";
		//var weatherday = "forecast";

		$("#btnoneday").click(function(){
			var weatherday = "weather";
			getWeather (function (dateweather) {
				var vdate = new Date(dateweather.dt*1000);
				//console.log(vdate);
				vdate = (vdate.getDate() + '.' + (vdate.getMonth()+1) + '.' + vdate.getFullYear() + " " +vdate.getHours() + ":" +vdate.getMinutes() + "0");
				//console.log(vdate);
				//wdata = getUNIXDate(vdate);
				//console.log(wdata);

    			$("#result").empty();
    			//$("#result").append("<li> Дата " + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()  + "</li>");
    			//$("#result").append("<li> Дата " + (moment(dateunix).format('LL'))  + "</li>");
    			//$("#result").append("<li> Дата " + (moment(dateunix).format('LLL'))  + "</li>");
    			$("#result").append("<li> Дата - " + vdate  + "</li>");
    			$("#result").append("<li>Місто - " + dateweather.name + "</li>");
     			$("#result").append("<li>Температура - " + (dateweather.main.temp - 273.15).toFixed(2) + "</li>");
     			$("#result").append("<li>Тиск - " + (dateweather.main.pressure * 0.750063755419211).toFixed(2) + "</li>");
     			$("#result").append("<li>Вологість - " + dateweather.main.humidity + "%</li>");
    		});
		});

		$("#btn5day").click(function(){
			weatherday = "forecast";
					console.log(weatherday);
			getWeather (function (dateweather) {
				//for (i=0; i < dateweather.cnt; i++){
				//$("#result5day").empty();
				console.log(dateweather.cnt);
				//console.log(dateweather.list.0.main.temp);
				for (i = 0; i <= 6; i++){
					console.log(i);
					var vdate = new Date(dateweather.list.i.dt*1000);
					console.log(vdate);	
					vdate = (vdate.getDate() + '.' + (vdate.getMonth()+1) + '.' + vdate.getFullYear() + " " +vdate.getHours() + ":" +vdate.getMinutes() + "0");
					console.log(vdate);
					$("#result5day").append("<li> Дата - " + vdate + "</li>");
    				$("#result5day").append("<li>Місто - " + dateweather.list.i.name + "</li>");
     				$("#result5day").append("<li>Температура - " + (dateweather.list.i.main.temp - 273.15).toFixed(2) + "</li>");
     				$("#result5day").append("<li>Тиск - " + (dateweather.list.i.main.pressure * 0.750063755419211).toFixed(2) + "</li>");
     				$("#result5day").append("<li>Вологість - " + dateweather.list.i.main.humidity + "%</li>");
					}
				//var vdate = new Date(dateweather.dt*1000);
				//$("#result").append("<li> Дата " + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()  + "</li>");
    			//$("#result").append("<li> Дата " + (moment(dateunix).format('LL'))  + "</li>");
    			//$("#result").append("<li> Дата " + (moment(dateunix).format('LLL'))  + "</li>");
    			
    		});

		});

		function getWeather(dateweather){
			/*if ()
			*/
		//	var URL = "https://api.openweathermap.org/data/2.5/weather?id=";
				var URL = "https://api.openweathermap.org/data/2.5/";
				var CODE = "eb0e999708d3c56298b0afb9fc4c2815";				
		//		var URI = (URL + $("#city").val() + "&appid=" + CODE);
				var URI = (URL + weatherday + "?id=" +$("#city").val() + "&appid=" + CODE);
				console.log(URI);
				$.ajax({
					url: URI,
					type: "GET",
			//		datatype: "jsonp",
					//success: callback
					success: dateweather
				/*	success: function(data) {
          			$("#task").append("<h1>" + data.main.temp + "</h1>");
              	}*/
         			});
			};

	});
});

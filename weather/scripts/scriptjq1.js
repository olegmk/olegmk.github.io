
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
			console.log(weatherday);
			getWeather (function (dateweather) {
				var vdate = new Date(dateweather.dt*1000);
				//console.log(vdate);
				vdate = (vdate.getDate() + '.' + (vdate.getMonth()+1) + '.' + vdate.getFullYear() + " " +vdate.getHours() + ":" +vdate.getMinutes());
				//console.log(vdate);
				//wdata = getUNIXDate(vdate);
				//console.log(wdata);
    			$("#result").empty();
    			$("#result5day").empty();
    			//$("#result").append("<li> Дата " + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()  + "</li>");
    			//$("#result").append("<li> Дата " + (moment(dateunix).format('LL'))  + "</li>");
    			//$("#result").append("<li> Дата " + (moment(dateunix).format('LLL'))  + "</li>");
    			$("#result").append("<h3>Місто - " + dateweather.name + "</h3>");
    			$("#result").add('<table></table>');
    			$("#result").append("<tr><td>Дата - " + vdate  + "</td></tr>");
    			$("#result").append("<tr><td>Температура - " + (dateweather.main.temp - 273.15).toFixed(2) + "</td></tr>");
     			$("#result").append("<tr><td>Тиск - " + (dateweather.main.pressure * 0.750063755419211).toFixed(2) + "</td></tr>");
     			$("#result").append("<tr><td>Вологість - " + dateweather.main.humidity + "%</td></tr>");
     			
    		});
		} 
		else {
			var weatherday = "forecast";	
			console.log(weatherday);
			getWeather (function (dateweather) {
				//for (i=0; i < dateweather.cnt; i++){
				//$("#result5day").empty();
				//console.log(dateweather.cnt);
				//console.log(dateweather.list.0.main.temp);
				$("#result").empty();
				$("#result5day").empty();
				$("#result5day").html("<h3>Місто - " + dateweather.city.name + "</h3>");
				for (i = 0; i <= (dateweather.cnt-1); i++){
					console.log(i);
					var vdate = new Date(dateweather.list[i].dt*1000);
					console.log(vdate);	
					vdate = (vdate.getDate() + '.' + (vdate.getMonth()+1) + '.' + vdate.getFullYear() + " " +vdate.getHours() + ":" +vdate.getMinutes());
					console.log(vdate);
					$("#result5day").add('<table></table>');
					$("#result5day").append("<tr><td>Дата - " + vdate + "</td></tr>");
    				$("#result5day").append("<tr><td>Температура - " + (dateweather.list[i].main.temp - 273.15).toFixed(2) + "</td></tr>");
     				$("#result5day").append("<tr><td>Тиск - " + (dateweather.list[i].main.pressure * 0.750063755419211).toFixed(2) + "</td></tr>");
     				$("#result5day").append("<tr><td>Вологість - " + dateweather.list[i].main.humidity + "%</td></tr>");
     				$("#result5day").append("<br>");
					}
				//var vdate = new Date(dateweather.dt*1000);
				//$("#result").append("<li> Дата " + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()  + "</li>");
    			//$("#result").append("<li> Дата " + (moment(dateunix).format('LL'))  + "</li>");
    			//$("#result").append("<li> Дата " + (moment(dateunix).format('LLL'))  + "</li>");
    		});
		}

		function getWeather(dateweather){
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

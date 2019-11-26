$(document).ready(function() {
console.log("here is something");
    $(".search").on("click", function() {
    
        var searchValue = $(".searchVal").val();
        $(".searchVal").val("");
        searchWeather(searchValue);

     });   

     function searchWeather (searchValue) {
        $.ajax({
            type: "GET", 
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=137be5185dbcc5d4f1527c85d91ed486&units=imperial",
            dataType: "json"


        });
        $("#currentWeather").empty();

        var title = $("<h1>").addClass("city").text(data.name + " (" + new Date().toLocaleDateString() + ")");
        var card = $("<div>").addClass("card")
        var windData = $("<p>").addClass("wind").text("Wind speed: " + data.wind.speed + " mph");
        var tempData = $("<p>").addClass("temp").text("Temperature: " + data.main.temp);
        var humidityData = $("<p>").addClass("humidity").text("Humidity: " + data.main.humidity + "%");
        var image = $("<img>").addClass(".icon").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        var cardBody = $("<div>").addClass("cardBody");
        title.append(image);
        cardBody.append(title, tempData, windData, humidityData);
        card.append(cardBody);
        $("#currentWeather").append(card);

        getUVIndex(data.coord.lat, data.coord.lon);
        getForecast(searchValue);

     };
   


 });


    //5 day weather data:
    function getForecast(searchValue) {
        $.ajax({

            type: "GET",
            //change api key below
            url:"http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=137be5185dbcc5d4f1527c85d91ed486&units=imperial"
            
        
        });


    }



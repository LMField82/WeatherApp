$(document).ready(function () {
    console.log("it's connected");

    $("#searchBtn").on("click", function() {

        var searchValue = $("#searchCity").val();
        $("#searchCity").val("");
        searchWeather(searchValue);
        console.log(searchValue);


    });
    
var history = $(".prevSearch").val(searchValue);

function searchWeather(searchValue) {
    $.ajax({
        type: "GET",
        url:"http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=137be5185dbcc5d4f1527c85d91ed486&units=imperial",
        dataType: "json",

        success: function(data) {
            if(history.indexOf(searchValue) === -1) {
                history.push(searchValue);
                window.localStorage.setItem("history", JSON.stringify(history));

                makeRow(searchValue);
            };
            console.log(data);
        }


    });



}


});
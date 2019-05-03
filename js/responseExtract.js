var myLocation = context.entities.location;      //Original input from user
UserSession.put("myLocation", myLocation, 2000); //Stored for ease of access later

var myReportBy;
var myDescript;
var curTempKelvin;
var minTempKelvin;
var maxTempKelvin;
var curTempFahr;
var minTempFahr;
var maxTempFahr;

// TODO: I feel like there should be a way to dynamically set the context path.
//   Tried it via string concatenation but did not work.
if (context.session.UserSession.myLocMethod == "city"){
    myReportBy = context.GET_WeatherForLocationCity.response.body.name;
    myDescript = context.GET_WeatherForLocationCity.response.body.weather[0].description;

    curTempKelvin = context.GET_WeatherForLocationCity.response.body.main.temp;
    minTempKelvin = context.GET_WeatherForLocationCity.response.body.main.temp_min;
    maxTempKelvin = context.GET_WeatherForLocationCity.response.body.main.temp_max;

    curTempFahr = Math.round(((curTempKelvin - 273.15) * 1.8)+32);
    minTempFahr = Math.round(((minTempKelvin - 273.15) * 1.8)+32);
    maxTempFahr = Math.round(((maxTempKelvin - 273.15) * 1.8)+32);

} else {
    myReportBy = context.GET_WeatherForLocationZip.response.body.name;
    myDescript = context.GET_WeatherForLocationZip.response.body.weather[0].description;

    curTempKelvin = context.GET_WeatherForLocationZip.response.body.main.temp;
    minTempKelvin = context.GET_WeatherForLocationZip.response.body.main.temp_min;
    maxTempKelvin = context.GET_WeatherForLocationZip.response.body.main.temp_max;

    curTempFahr = Math.round(((curTempKelvin - 273.15) * 1.8)+32);
    minTempFahr = Math.round(((minTempKelvin - 273.15) * 1.8)+32);
    maxTempFahr = Math.round(((maxTempKelvin - 273.15) * 1.8)+32);
}

// Store results in UserSession
UserSession.put("myReportBy", myReportBy, 2000);
UserSession.put("myDescript", myDescript, 2000);
UserSession.put("curTempFahr", curTempFahr, 2000);
UserSession.put("minTempFahr", minTempFahr, 2000);
UserSession.put("maxTempFahr", maxTempFahr, 2000);

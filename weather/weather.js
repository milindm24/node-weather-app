const request = require("request");

var getWeather = (lat,long,callback) =>{

    request({
        url: `https://api.darksky.net/forecast/55afaced3d570f8c1568fe6604d29272/${lat},${long}`,
        json: true
    },(error,response,body) =>{
    
        if (!error && response.statusCode === 200){
            callback(undefined, { 
                current: body.currently.temperature,
                feelslike : body.currently.apparentTemperature
            });
        }else {
            callback("Unable to connect to forecast.io");
        }
       
    
    })

}

module.exports = {
    getWeather
}

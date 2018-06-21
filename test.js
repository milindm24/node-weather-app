const request = require("request");

request({
    url: "https://api.darksky.net/forecast/55afaced3d570f8c1568fe6604d29272/23.0444246,69.0448657",
    json: true
},(error,response,body) =>{

    if (!error && response.statusCode === 200){
        console.log(`Current temperature is ${body.currently.temperature}`);
    }else {
        console.log("Unable to connect to forecast.io")
    }
   

})
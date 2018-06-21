const geocode = require("./geocode/geocode");
const yargs = require("yargs");
const weather = require("./weather/weather");

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help()
.alias('help','h')
.argv;


geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if(errorMessage){
        console.log(errorMessage);
    }else {
        console.log(JSON.stringify(result, undefined , 2));
        weather.getWeather(result.lattitude,result.longitude, (errorMessage, currentTemperature)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else {
                console.log(`Current Temperature is ${(5/9 * (currentTemperature.current-32)).toFixed(2)} *C.Feels like ${(5/9 * (currentTemperature.feelslike-32)).toFixed(2)} *C`);
            }
        })
    }
});




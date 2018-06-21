const request = require("request");


var geocodeAddress = (address,callback) =>{

    var encodedURL = encodeURIComponent(address);

request({
    url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}`,
    json: true
}, (error,response,body)=> {

    if (error){
        callback('unable to connect to google server');
    }else if(body.status === 'ZERO_RESULTS'){
        callback('Unable to find given adddress');
    }else if(body.status === 'OK'){
        callback(undefined, {
            address: body.results[0].formatted_address,
            route: body.results[0].address_components[1].long_name,
            lattitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
    }
});    
}


module.exports = {
    geocodeAddress
}



// https://api.darksky.net/forecast/55afaced3d570f8c1568fe6604d29272



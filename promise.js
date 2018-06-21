const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url : `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true
        },(error,response, body)=>{
            if (error){
                reject('unable to connect to google server');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find given adddress');
            }else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    route: body.results[0].address_components[1].long_name,
                    lattitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        })
    })
};


geocodeAddress('error').then((location)=> {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage)=>{
    console.log(errorMessage)
})


const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true //To save our JSON.parse step
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect');
        }else if(body.status == 'ZERO_RESULTS'){
            callback('Invalid Address');
        }else if(body.status == 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });

            //console.log(body);
            //console.log(JSON.stringify(response, undefined, 2)); //Pretty Printing Objects
            // console.log(`Address: ${body.results[0].formatted_address}`);
            // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
    });
};

module.exports = {
    geocodeAddress
}
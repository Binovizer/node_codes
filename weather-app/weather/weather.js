const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    
    request({
        url: `https://api.darksky.net/forecast/2ec60043d207704b60236e5953f6a4c2/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                "temperature" : body.currently.temperature,
                "apparentTemperature" : body.currently.apparentTemperature
            });
        }else{
            callback('Unable to fetch weather');
        }
    });
};

module.exports.getWeather = getWeather;
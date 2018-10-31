const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        address: {
            desc: 'Address to fetch weather for',
            demand: true,
            alias: 'a',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;



geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    }else{
        //console.log(JSON.stringify(results, undefined, 2));
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                //console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`It's currently ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}`)
            }
        });
    }
});
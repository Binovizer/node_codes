const yargs = require('yargs');
const axios = require('axios');
const fs = require('fs');

const argv = yargs
            .command('*', 'For all Commands', {
                address: {
                    desc: "Address to find weather for",
                    alias : 'a'
                }
            })
            .command('default', 'Set Address to default', {
                address: {
                    desc: "Address to find weather for",
                    demand : true,
                    alias : 'a'
                }
            })
            .help()
            .argv;

var command = argv._[0];
var address = argv.address;
if(command === 'default'){
    fs.writeFileSync('default-address.json', JSON.stringify({
        address: argv.address
    }));
}else{
    if(address === undefined){
        console.log('Using the default Address');
        var addressObj = JSON.parse(fs.readFileSync('default-address.json'));
        address = addressObj.address;
    }
}
var encodedAddress = encodeURIComponent(address);
var geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find the address');
    }
    console.log('Address: '+response.data.results[0].formatted_address);
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/2ec60043d207704b60236e5953f6a4c2/${latitude},${longitude}`;
    return axios.get(weatherURL);
}).then((response) => {
    var temp = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;
    console.log(`Its currently ${temp}. It feels like ${apparentTemp}`);
}).catch((e) => {
    if (e.code == 'ENOTFOUND'){
        console.log('Unable to connect to api servers');
    }else{
        console.log(e.message);
    }
});

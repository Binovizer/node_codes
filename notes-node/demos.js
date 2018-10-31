console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

console.log(_.isString('Hello'));
console.log(_.isString(true));

var filteredArray = _.uniq(['nadeem', 'nadeem', 1, 1, 2, 3, 5]);
console.log(filteredArray);

/* var res = notes.addNote();
console.log(res); 

var res = notes.addNumbers(4, -9);
console.log(res);
 */
/* var userInfo = os.userInfo();
var template = `Hello ${userInfo.username}! You are ${notes.age}.`;


fs.appendFile('greetings.txt', template, function(err){
    if(err){
        console.log(err);
    }
}); */

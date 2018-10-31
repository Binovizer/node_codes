const expect = require('expect');

const utils = require('./utils');


it('Should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
    // if(res !== 44){
    //     throw new Error(`Expected 44 but got ${res}`);
    // }
});

it('Should add square the number', () => {
    var res = utils.square(11);
    expect(res).toBe(121).toBeA('number');
    // if(res !== 121){
    //     throw new Error(`Expected 121 but got ${res}`);
    // }
});

it('should verify first and last name', () => {
    var user = {
        age: 21,
        location: "Delhi"
    }
    var res = utils.setName(user, "Mohd Nadeem");
    expect(res).toInclude({
        firstName:"Mohd", 
        lastName:"Nadeem"
    });
});

it('should asnc add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });  
});

// it('should expect some value', () => {
//     // expect(12).toNotBe(11);
//     // expect({name : "Nadeem"}).toEqual({name : "Nadeem"});
//     // expect([2,3,4]).toInclude(5);
//     // expect([2,3,4]).toExclude(5);
//     expect({
//         name: "Nadeem",
//         age: 21,
//         location: "India"
//     }).toInclude({
//         age: 23
//     });
// });
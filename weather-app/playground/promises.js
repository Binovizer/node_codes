var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b == 'number'){
                resolve(a+b);
            }else{
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, 10).then((result) => {
    console.log(`Result: ${result}`);
    return asyncAdd(result, 10);
}).then((res) => {
    console.log(`Should be 25 : ${res}`)
}).catch((errorMsg) => {
    console.log(errorMsg);
});







// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('It worked');
//         reject('Failed to fulfill the promise')
//     }, 2500);
// });

// somePromise.then((successMsg) => {
//     console.log(successMsg);
// }, (errorMsg) => {
//     console.log(errorMsg);
// });
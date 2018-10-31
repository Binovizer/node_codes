console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('With 0 delay');
}, 0);

console.log('Finishing up');
const { people, ages } = require('./people');

console.log(people, ages);

// just because we import a file we don't automatically give us access to items/data we need from that file
// console.log(people);

const os = require('os');
// os is a built in function to learn more about the users device we can use it if we need the user to meet current requirements
console.log(os.platform(), os.homedir());


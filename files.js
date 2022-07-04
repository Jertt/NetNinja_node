    //  fs stands for the file system module
const fs = require('fs');

    // reading files
    //  readFile is Asynchronous, which reads the entire contents of a file and it might take sometime, err displays the error so if
    // we have the wrong path or something wrong with the file err is going to display that, change the file name for test
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
    // basically readFile reads the entire fire but node doesn't wait for it to finish it carries with the js and then when it finishes it displays
// console.log('before readFile function');

// writing files
    //  this function is going to write whatever is in the file with whatever we input example 'hello, world'
fs.writeFile('./docs/blog.txt', 'hello, world', () => {
    console.log('File was successfully written')
});
    // if we try to write a file that doesn't exist it is going to create that file for us!!
fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log('File was successfully written')
});

// directories


// deleting files
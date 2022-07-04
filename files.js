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


// directories


// deleting files
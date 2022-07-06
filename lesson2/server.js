// creating our server in this file

// here we are requiring 
const http = require('http');
const fs = require('fs');

// we can also store the server in a constant variable for example down, just in case we need to use the server for websockets or smth else
// const server = http.createServer();

// inside the () "argument" is called a callback function
//the callback function will run every time a request comes in to our server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    // res.setHeader('Content-Type', 'text/html');

    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>hello jertti</p>');
    // res.write('<p>hello jertti again</p>');
    // res.end();

    // set header content type, plain text or smth with html
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            // we can use an old url name to redirect the user to new url
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
        }
        // Status Codes 
        // 100 Range - Informational Responses
        // 200 Range - Success Codes 
        // 300 Range - codes for redirects
        // 400 Range - user on client error codes
        // 500 Range - Server error codes
    // send an html file to the req
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
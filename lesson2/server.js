// creating our server in this file

// here we are requiring 
const http = require('http');

// we can also store the server in a constant variable for example down, just in case we need to use the server for websockets or smth else
// const server = http.createServer();

// inside the () "argument" is called a callback function
//the callback function will run every time a request comes in to our server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');


    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('<p>hello jertti</p>');
    res.write('<p>hello jertti again</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
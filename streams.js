const fs = require('fs');

const readStream = fs.createReadStream('./docs/blogl.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('------ NEW CHUNK ------');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// });

// when we use a pipe it must be from a readable stream to a writeable one!

// piping

readStream.pipe(writeStream);
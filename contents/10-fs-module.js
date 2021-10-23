//FS MODULE
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./contents/first.txt', 'utf8');
const second = readFileSync('./contents/second.txt', 'utf8');

writeFileSync(
    './contents/newFile.txt',
    `This is the result of: ${first}, ${second}`,
    {flag: 'a'}
)

console.log(first);
console.log(second);

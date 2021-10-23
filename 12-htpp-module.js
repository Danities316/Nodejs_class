const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req);
    res.write('Welcome to our Home page, I wouldbe with you as soon as possible');
    res.end()

})

server.listen(5000);
// const http = require('http');
const os = require('os');

// http.createServer((req, res) => {
//     console.log(req.url);
//     console.log(req.headers);
//     console.log(req.method);
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('I, programer.');
// }).listen(3000, () => console.log('server works fine!'));

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());


const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express(0);

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req,res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});
app.listen(PORT, () => console.log(`Server works fine at ${PORT}`));

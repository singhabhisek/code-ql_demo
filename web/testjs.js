// test_vuln.js
const { exec } = require("child_process");
const http = require("http");

http.createServer((req, res) => {
    const userInput = req.url; // user-controlled input
    exec(`echo ${userInput}`, (err, stdout, stderr) => {
        if (err) console.error(err);
        console.log(stdout);
    });
    res.end("done");
}).listen(8080);

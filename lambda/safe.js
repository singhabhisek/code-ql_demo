// lambda_js/safe.js
const { exec } = require("child_process");

// Safe: no user input, just a fixed string
function safeCommand() {
    exec("echo HelloWorld", (err, stdout, stderr) => {
        if (err) console.error(err);
        console.log(stdout);
    });
}

safeCommand(); // CodeQL might flag 'exec', but it’s actually safe

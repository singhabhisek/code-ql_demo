const { exec } = require("child_process");

function unsafeCommand(input) {
    // Vulnerable: executing user input directly
    exec(`echo ${input}`, (err, stdout, stderr) => {
        if (err) console.error(err);
        console.log(stdout);
    });
}

unsafeCommand("hello; rm -rf /"); // Test input

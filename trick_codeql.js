// trick_codeql.js
const { exec } = require("child_process");

// "safe" string but passed indirectly
const part1 = "echo";
const part2 = "HelloWorld";
const command = part1 + " " + part2;

// CodeQL sees a concatenated string, might flag exec
exec(command, (err, stdout) => {
  if (err) console.error(err);
  console.log(stdout);
});


function run(cmd) {
    const { exec } = require("child_process");
    exec(cmd, (err, stdout) => {
        if (err) console.error(err);
        console.log(stdout);
    });
}

const safeCmd = "echo HelloWorld";
run(safeCmd); // Might trigger CodeQL because data flows through a function

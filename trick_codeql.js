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

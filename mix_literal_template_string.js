const userInput = "static";  // not real user input
const { exec } = require("child_process");
//abcd comment
exec(`echo ${userInput}`, (err, stdout) => {
  if (err) console.error(err);
  console.log(stdout);
});

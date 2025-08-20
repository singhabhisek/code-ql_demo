const { exec } = require("child_process");

// "safe" config, but read dynamically
const config = { cmd: "echo HelloWorld" };

// Using a dynamic property key
const key = "cmd";
exec(config[key], (err, stdout) => {
  if (err) console.error(err);
  console.log(stdout);
});

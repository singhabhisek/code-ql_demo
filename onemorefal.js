// .js
const { exec } = require("child_process");

const commands = {
    safe: {
        nested: {
            cmd: "echo DeepSafe"
        }
    }
};

function runCommand(obj, key1, key2) {
    return obj[key1][key2];
}

const dynamicCmd = runCommand(commands, "safe", "nested").cmd;
exec(dynamicCmd, (err, stdout) => {
    if (err) console.error(err);
    console.log(stdout);
});

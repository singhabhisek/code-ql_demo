const { spawn } = require('child_process');
const path = require('path');

function getUserById(userId) {
    return new Promise((resolve, reject) => {
        const script = path.join(__dirname, 'userService.py');
        const proc =  spawn('python3', [script, String(userId || '')]);
        let out = '', err = '';
        proc.stdout.on('data', d => out += d.toString());
        proc.stderr.on('data', d => err += d.toString());
        proc.on('close', code => {
            if (code !== 0) return reject(new Error(err || 'Python exited with codes ' + code));
            try { resolve(JSON.parse(out)); }
            catch (e) { resolve({ raw: out.trim() }); }
        });
    });
}

module.exports = { getUserById };


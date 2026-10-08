const path = require("node:path")
const fs = require("node:fs")

const logsDir = path.join(__dirname, "Logs");

if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    for (let i = 0; i < files.length; i++) {
        const fileName = files[i]
        console.log("delete files..." + fileName);
        fs.unlinkSync(path.join(logsDir, fileName));
    }
    fs.rmdirSync(logsDir);
}

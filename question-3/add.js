const path = require("node:path")
const fs = require("node:fs")

const logsDir = path.join(__dirname, "Logs");

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
    const fileName = "log" + i + ".txt";
    fs.writeFileSync(fileName, "log file number " + i)
    console.log(fileName);
}
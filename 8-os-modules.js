const os = require('os')

// info about the cureent user of this system
const user = os.userInfo()
console.log(user)

//method to returns the system uptime
console.log(`The system uptime is in minutes: ${os.uptime() / 60}`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOs)
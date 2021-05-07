//run this

const fs = require('fs')

//include serverjs
eval(fs.readFileSync('htmlagent/server.js', 'utf8'))
//----------//

function new_message() {
    console.log(responses)
    sender.send(responses)
}

setup(5000,"new_message()")

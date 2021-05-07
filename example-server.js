//example server

//include serverjs
const fs = require('fs')
eval(fs.readFileSync('htmlagent/server.js', 'utf8'))
//----------//

function new_message() {
    console.log(responses)
    sender.send(responses)
}

setup(5000,"new_message()") //setup on localhost:5000 and on-message run: new_message()

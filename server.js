const WebSocket = require('ws')
const { send } = require('process')

var agent
var responses
var sender 

function setup(port,action) {
    agent =  new WebSocket.Server({ port: port })
    console.log("Running on port " + port)
    agent.on('connection', ws => {

        sender = ws

        console.log("connected")

        ws.on('message', message => {
            responses = message
            eval(`${action}`)
        })

    })
}
# Html-agent
### A useful client-server communication library for combining server-side Node.js and client-side HTML-JS
###### How to Use
---
- Server.js is the main library, the two others are client and server examples
- Make sure to have [fs](https://www.npmjs.com/package/file-system), and [WebSocket](https://www.npmjs.com/package/websocket) installed
- Run Server.js
- Create and run a client, better documentation in the examples

###### But Why Tho
---
- Well, this can be used for an easy local communication between node and html
- It is useful for...
  - Creating HTMl/CSS ui's that include JS
  - Being able to have an HTML button click that runs a nodeJS function
    - How? Well by creating a protocol. See Below!

###### Creating Protocols
---
##### So... You want to try this out with a more complex idea. Well, say no more!
- Protocols are simple. Just remember that this uses websockets, and so only strings can be sent. Anything not a string will be converted automatically.
  - To avoid this, just use JSON.parse() on your received data!
- An example with pseudocode is...

```
CLIENT:
---

//create all of the UI//

<input id="input"></input>
<button onclick="send(1)">click</button>
<br>
<button onclick="send(2)">another button</button>

<script>
function send_one(protocol) {
  var header
  if (protocol == 1) {
    header = "P1"
  } else () {
    header = "P2"
  }
  
  //depending on what button the user chose, send the correct header//
  
  var data = document.getElementById(input).value
  send_msg(header + data)
}
</script>

SERVER:
---

function on_newdata(data) {
  if (data.substr(0,2) == "P1") {
    console.log("got data" + data.substr(2,data.length()) + "with protocol 1")
  }
  else() {
    console.log("got data" + data.substr(2,data.length()) + "with protocol 2")
  }
}

```

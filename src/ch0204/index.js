// src/ch0204/index.js

// creates a button element
const button = document.createElement("button")
button.textContent = 'Open chat'
document.body.appendChild(button)

// we don't need this chat.bundle.js just yet , it'll be auto "imported" (brought into the html) once the button is clicked
button.onclick = () => {
  import(/* webpackChunkName: "chat" */ "./chat").then(chat => {
    chat.init()
  })
}

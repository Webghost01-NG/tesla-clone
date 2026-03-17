import { useState } from "react"

function ChatBox(){

const [open,setOpen] = useState(false)
const [messages,setMessages] = useState([])
const [input,setInput] = useState("")

async function sendMessage(){

if(!input) return

const userMsg = {role:"user",content:input}

setMessages(prev => [...prev,userMsg])

const res = await fetch("https://openrouter.ai/api/v1/chat/completions",{

method:"POST",
headers:{
"Authorization":"Bearer YOUR_API_KEY",
"Content-Type":"application/json"
},

body:JSON.stringify({
model:"mistralai/mistral-7b-instruct",
messages:[...messages,userMsg]
})

})

const data = await res.json()

const botMsg = data.choices[0].message

setMessages(prev => [...prev,botMsg])
setInput("")

}

return(

<div className="chat-container">

<button className="chat-toggle" onClick={()=>setOpen(!open)}>
💬
</button>

{open && (

<div className="chat-box">

<div className="messages">

{messages.map((m,i)=>(
<p key={i}><b>{m.role}:</b> {m.content}</p>
))}

</div>

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Ask Tesla..."
/>

<button onClick={sendMessage}>Send</button>

</div>

)}

</div>

)

}

export default ChatBox
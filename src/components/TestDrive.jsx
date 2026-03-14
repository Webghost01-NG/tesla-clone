import { useState } from "react"

function TestDrive(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [model,setModel] = useState("Model 3")

function handleBooking(e){

e.preventDefault()

const booking = {
name,
email,
model
}

localStorage.setItem("teslaBooking",JSON.stringify(booking))

alert("Test Drive Booked Successfully 🚗")

}

return(

<div className="booking">

<h2>Book a Test Drive</h2>

<form onSubmit={handleBooking}>

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<select
value={model}
onChange={(e)=>setModel(e.target.value)}
>

<option>Model S</option>
<option>Model 3</option>
<option>Model X</option>
<option>Model Y</option>

</select>

<button type="submit">
Book Test Drive
</button>

</form>

</div>

)

}

export default TestDrive
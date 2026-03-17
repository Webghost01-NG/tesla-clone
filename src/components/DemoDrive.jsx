import { useState } from "react"

function DemoDrive(){

const [form,setForm] = useState({
name:"",
email:"",
model:"Model 3"
})

function handleSubmit(e){

e.preventDefault()

localStorage.setItem("demoDrive",JSON.stringify(form))

alert("Demo Booked 🚗")

}

return(

<section className="demo">

<h2>Demo Drive</h2>

<form onSubmit={handleSubmit}>

<input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
<input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>

<select onChange={(e)=>setForm({...form,model:e.target.value})}>
<option>Model S</option>
<option>Model 3</option>
<option>Model X</option>
<option>Model Y</option>
</select>

<button>Book</button>

</form>

</section>

)

}

export default DemoDrive
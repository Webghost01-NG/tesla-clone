import { useEffect,useState } from "react"

function Checkout(){

const [booking,setBooking] = useState(null)

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("teslaBooking"))

if(data){
setBooking(data)
}

},[])

if(!booking){

return(

<div className="checkout">
<h2>No Booking Found</h2>
</div>

)

}

return(

<div className="checkout">

<h2>Reservation Summary</h2>

<p><b>Name:</b> {booking.name}</p>
<p><b>Email:</b> {booking.email}</p>
<p><b>Model:</b> {booking.model}</p>

<button className="checkout-btn">
Proceed to Checkout
</button>

</div>

)

}

export default Checkout
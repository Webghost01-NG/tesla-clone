import Header from "./components/Header"
import Section from "./components/Section"
import DemoDrive from "./components/DemoDrive"
import ChatBox from "./components/ChatBox"
import { cars } from "./data/cars"

function App(){

return(

<div>

<Header />

{cars.map((car,i)=>(
<Section key={i} {...car}/>
))}

<DemoDrive />

<ChatBox />

</div>

)

}

export default App
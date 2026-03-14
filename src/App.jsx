import Header from "./components/Header"
import Section from "./components/Section"
import { cars } from "./data/cars"
import Hero from "./components/Hero"  



function App(){

return(

<div>

<Header />

{cars.map((car,index)=>(
<Section key={index} {...car}/>
))}

<Hero />

{cars.map((car,index)=>(
<Section key={index} {...car}/>
))}

</div>

)

}

export default App
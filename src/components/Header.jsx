import { useState,useEffect } from "react"

function Header(){

const [scrolled,setScrolled] = useState(false)

useEffect(()=>{
window.addEventListener("scroll",()=>{
setScrolled(window.scrollY > 50)
})
},[])

return(

<header className={scrolled ? "header active":"header"}>

<img src="/images/logo.svg" className="logo" />

<nav className="menu">
<a href="#">Model S</a>
<a href="#">Model 3</a>
<a href="#">Model X</a>
<a href="#">Model Y</a>
</nav>

</header>

)

}

export default Header
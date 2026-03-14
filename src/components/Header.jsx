import { useState } from "react"

function Header(){

const [menuOpen,setMenuOpen] = useState(false)

return(

<header className="header">

<img src="/images/logo.svg" className="logo" />

<nav className="menu">

<a href="#">Model S</a>
<a href="#">Model 3</a>
<a href="#">Model X</a>
<a href="#">Model Y</a>

</nav>

<div className="right-menu">

<a href="#">Shop</a>
<a href="#">Account</a>

<button
className="menu-btn"
onClick={()=>setMenuOpen(true)}
>
Menu
</button>

</div>

<div className={menuOpen ? "side-menu active" : "side-menu"}>

<button
className="close-btn"
onClick={()=>setMenuOpen(false)}
>
✕
</button>

<a href="#">Existing Inventory</a>
<a href="#">Used Inventory</a>
<a href="#">Trade-In</a>
<a href="#">Test Drive</a>
<a href="#">Charging</a>
<a href="#">Energy</a>

</div>

</header>

)

}

export default Header
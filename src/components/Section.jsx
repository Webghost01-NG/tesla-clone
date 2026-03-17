import useScrollFade from "../hooks/useScrollFade"

function Section({ title, tagline, image }) {

useScrollFade()

return (

<section
  className="section fade"
  style={{ backgroundImage: `url(${image})` }}
>

<div className="overlay">

<h1>{title}</h1>
<p>{tagline}</p>

<div className="buttons">

<button className="btn-dark">Order Now</button>

<button className="btn-light">Demo Drive</button>

</div>

</div>

</section>

)

}

export default Section
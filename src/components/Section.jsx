function Section({title, tagline, image}){

return(

<section
className="section"
style={{backgroundImage:`url(${image})`}}
>

<div className="section-content">

<h1>{title}</h1>
<p>{tagline}</p>

<div className="buttons">

<button className="btn-dark">
Custom Order
</button>

<button className="btn-light">
Demo Drive
</button>

</div>

</div>
<img
src="/images/down-arrow.svg"
className="down-arrow"
/>

</section>

)

}

export default Section
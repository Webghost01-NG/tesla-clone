function Hero(){

return(

<section className="hero">

<video
autoPlay
loop
muted
className="hero-video"
>

<source
src="/videos/tesla-hero.mp4"
type="video/mp4"
/>

</video>

<div className="hero-content">

<h1>Experience Electric</h1>

<button className="btn-dark">
Order Now
</button>

</div>

</section>

)

}

export default Hero
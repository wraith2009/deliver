// import aboutImg from '../images/About-banner.jpg';
import imglogo from '../images/foodapp-logo.jpg';
import aboutImg from '../images/aboutpage.jpg'

function About() {
  return (
    <div className='about-main-sec'>
        <div className='image-about-sec'>
          <img src={aboutImg}/>
        </div>
        <div className='about-content-sec'>
          <img src={imglogo}/>
          {/* <h1 className="about-h">Deliver</h1> */}
          <p className='about-p1'>Deliver is a food ordering web application built with React.js ⚛ and Swiggy's API.</p>
          <p className='about-p2'>Created by <span>Rahul Bhardwaj</span></p>
        </div>
    </div>
  )
}

export default About
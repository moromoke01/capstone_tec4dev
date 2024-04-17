import React from 'react';
import './Home.css';
import Navbar from './quiz/Navbar';
import image from '../Assets/homeig.png';
import foot_one from '../Assets/img1.jpeg';
import foot_two from '../Assets/img2.jpeg';
import foot_three from '../Assets/img3.jpeg';
import Freq from './FAQ/freq';
import logo from '../Assets/logo.png'
import RoundProgressBar from './progressbar/progress'

const Home = () => {
  const progress = 80; 
  function getRandomPosition() {
    const maxX = window.innerWidth - 100; 
    const maxY = window.innerHeight - 100; 
    const randomX = Math.random() * maxX; 
    const randomY = Math.random() * maxY; // Random y-coordinate
    return { left: randomX, top: randomY }; // Return object with left and top properties
  }

  return (
    <div>
      <Navbar />
      <div className='containerbody'>
        <h1>Unleashing Your Tech Skills Potential</h1>
        <h2>Welcome to Insightify, your ultimate destination for unlocking your true potential in the vast world of technology. <br/>At Insightify, we believe that every individual possesses unique talents and abilities waiting to be discovered and harnessed. <br/>With our cutting-edge psychometric tests tailored specifically for tech skills, <br/>we are dedicated to helping you understand your strengths, identify areas for growth, <br/>and embark on a journey of continuous improvement. </h2>
        <div><button className='but'>Take Test</button></div>
        <div><img src={image} alt="Home Image" /></div>
        <div className='gh'></div>
        <div className='gh'></div>
      </div>
     
      <div className='layer-two'>
      <footer>
        <div className='dofooter'>
          <span><img src={foot_one} alt="Footer Image 1" /></span>
          <span><img src={foot_two} alt="Footer Image 2" /></span>
          <span><img src={foot_three} alt="Footer Image 3" /></span>
        </div>
        <div className='pancon'>
          <span>
            <h3>10M+ Community</h3>
            <h6>You can be a member</h6>
          </span>
        </div>
        <div className='stars'>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </footer>
      </div>
      <div className='two'>
        <h1 id='about'>About Insightify</h1>
      </div>

      <span className='par'>
  <div className="card-container1">
    <div className="paral">
      <h2>Our Mission</h2>
      <h4>Our mission at Insightify is simple yet profound: <br/>to empower individuals like you to thrive in the fast-paced and dynamic field of technology.<br/> We are committed to providing you with the tools, resources, and insights needed to excel<br/> in your tech career and achieve your professional goals. <br/></h4>
    </div>

    <div className="paral">
      <h2>Our Commitment to Excellence</h2>
      <h4>At Insightify, excellence is not just a goal; it's our standard. We are dedicated to upholding the  <br/>
      highest standards of quality, integrity, and professionalism in everything we do. Whether you're a  <br/>seasoned tech professional looking to level up your skills or a newcomer eager to break into the <br/>industry, Insightify is here to support you every step of the way.</h4>
    </div>

    <div className="paral">
      <h2>Lorem ipsum</h2>
      <h4>Lorem ipsum dolor sit amet consectetur. Porta ut pretium aliquet sed placerat <br/>
          Lorem ipsum dolor sit amet consectetur. Porta ut pretium aliquet sed placerat <br/>venenatis purus. Habitasse et blandit.</h4>
    </div>
  </div>
  <div className='score'><h2>Your Score <i class="fa-solid fa-arrow-right"></i></h2>
  <RoundProgressBar/>
  </div>
</span>

     <div className='nextone'>
        <div><h3>Join Insightify for getting  proven results</h3></div>
        <div className='changes'>
        <div>
            <h5>10M</h5>
            <h5>Lorem ipsum dolor sit amet <br/>consectetur.</h5>
        </div>
        <div>
            <h5>92%</h5>
            <h5>Lorem ipsum dolor sit amet <br/>consectetur.</h5>
        </div>
        <div>
            <h5>5000+</h5>
            <h5>Lorem ipsum dolor sit amet <br/>consectetur.</h5>
        </div>
        </div>
     </div>
     <div className='review'>
        <div className='reviewheading'> 
            <h1>Reviews </h1>
        </div>
        <div class="card-container">
        <div class="card">
            <div class="avatar">
                <img src={foot_one} alt="Person 1"/>
            </div>
            <div class="review">
                <h3>John Doe</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fugiat."</p>
                <div class="stars">★★★★</div>
            </div>
        </div>
        <div class="card">
            <div class="avatar">
                <img src={foot_two} alt="Person 2"/>
            </div>
            <div class="review">
                <h3>Jane Smith</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fugiat."</p>
                <div class="stars">★★★★★</div>
            </div>
        </div>
        <div class="card">
            <div class="avatar">
                <img src={foot_three} alt="Person 3"/>
            </div>
            <div class="review">
                <h3>Michael Johnson</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fugiat."</p>
                <div class="stars">★★★★★</div>
            </div>
        </div>
        <div class="card">
            <div class="avatar">
                <img src={foot_three} alt="Person 3"/>
            </div>
            <div class="review">
                <h3>Michaella Johnson</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fugiat."</p>
                <div class="stars">★★★★★</div>
            </div>
        </div>
    </div>
     </div>
     
       <div className='frequent'>
        <div className='faq-item'>
          <h3>Frequently Asked Questions</h3>
        </div>
        <Freq/>
        </div>
      <div className='second-tolast'>
         <div>
          <h1>Go On A Journey Of <br/>Self-Discovery With Us</h1>
          <div><button className='but' ><a href='/quiz'>Take a Test Now</a></button></div>
     
          <img src={foot_one} className='one'/>
         <img src={foot_two} className='otwo'/>
         <img src={foot_three} className='othree'/>
         <img src={foot_one} className='ofour' />
        
       </div>
       
      </div>
      <div className="last">
        <img src={logo}/>
        <ul>
           <li><a href=''>Home</a></li>
           <li><a href=''>About</a></li>
           <li><a href=''>Pricing</a></li>
           <li><a href=''>Blog</a></li>
           <li><a href=''>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

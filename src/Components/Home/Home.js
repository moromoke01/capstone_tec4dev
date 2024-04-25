import React from 'react';
import './Home.css';
import image from '../../Assets/Img.png';
import foot_one from '../../Assets/img1.jpeg';
import foot_two from '../../Assets/img2.jpeg';
import foot_three from '../../Assets/img3.jpeg';
import Freq from '../FAQ/freq';
// import logo from '../../Assets/logo.png';
// import RoundProgressBar from '../progressbar/progress';
// import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const progress = 80;

  function getRandomPosition() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    return { left: randomX, top: randomY };
  }

  return (
    <div>
      <Navbar />
      <div className='containerbody'>
        <h1>Unleashing Your Tech Skills Potential</h1>
        <h2>Welcome to Insightify, your ultimate destination for unlocking your true potential in the vast world of technology. <br />At Insightify, we believe that every individual possesses unique talents and abilities waiting to be discovered and harnessed. <br />With our cutting-edge psychometric tests tailored specifically for tech skills, <br />we are dedicated to helping you understand your strengths, identify areas for growth, <br />and embark on a journey of continuous improvement. </h2>
        <div><button className='but'>Take Test</button></div>
        <div><img src={image} alt="Home Groupie" /></div>
        <div className='gh'></div>
        <div className='gh'></div>
      </div>
    {/* Avatar/rating Section */}
<div className='layer-two'>
  <div className='dofooter'>
    <span><img src={foot_one} alt="Footer 1" /></span>
    <span><img src={foot_two} alt="Footer 2" /></span>
    <span><img src={foot_three} alt="Footer 3" /></span>
  </div>
  <div className='pancon'>
    <span>
      <h3>10M+ Community</h3>
      <h6>You can be a member</h6>
    </span>
  </div>
  <div className='stars'>
    <span>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <h6>20,000 rated</h6>
    </span>
  </div>
</div>

<div className='par'>
      <div className="card-container1">
        <div className="paral">
          <h2>Our Mission</h2> <br/>
          <h4>Our mission at Insightify is simple yet profound:<br/> <br/>To empower individuals like you to thrive in the fast-paced and dynamic field of technology.<br/> <br/> We are committed to providing you with the tools, resources, and insights needed to excel in your tech career and achieve your professional goals.</h4>
        </div>

        <div className="paral">
          <h2>Our Commitment To Excellence</h2> <br/>
          <h4>At Insightify, excellence is not just a goal; it's our standard. We are dedicated to upholding the highest standards of quality, integrity, and professionalism in everything we do.<br/> <br/>Whether you're a seasoned tech professional looking to level up your skills or a newcomer eager to break into the industry, Insightify is here to support you every step of the way.</h4>
        </div>
      </div>

      <div className="card-container1">
      <div className="paral">
          <h2>Take Your Test</h2> <br/>
          <h4>Embark on your tech journey to unlock your full potential.<br/>Start exploring and delve into your behavior, strengths, and weaknesses to uncover the tech skills that align with you perfectly.<br /> <br/> Insightify carefully analyzes your individual traits to craft personalized learning paths that match your unique goals and aspirations.</h4>
        </div>
        <div className="paral">
          <h2>Accurate Career Recommendations</h2> <br/>
          <h4>Unlock your professional potential with our Accurate Career Recommendations. <br/><br/>Our advanced algorithm considers your skills, experiences, and career goals to offer personalized advice tailored just for you.<br /><br/>Say goodbye to guesswork and hello to a clear path forward with Insightify</h4>
        </div>
      </div>
      </div>

      <div className='nextone'>
        <div><h3>Join Insightify to get  proven results</h3></div>
        <div className='changes'>
          <div>
            <h5>10000+</h5>
            <h4>Registered<br/> Users</h4>
          </div>
          <div>
            <h5>92%</h5>
            <h4>Career Match<br/> Accuracy</h4>
          </div>
          <div>
            <h5>5000+</h5>
            <h4>Who have successfully <br/>transitioned into tech</h4>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className='frequent'>
        <div className='faq-item'>
          <h3 className='items-center'>Frequently Asked Questions(FAQs)</h3>
        </div>
        <Freq />
      </div>
      {/* review section */}
      <div class="review">
        <div class="reviewheading">
          <h2>We’ve got a lot of testimonials. See what people <br/>have to say about our platform.</h2>
  </div>
  <div>
  </div>
  <div>
  <div class="card-container">
    <div class="card">
      <div class="avatar">
        <img src={foot_one} alt="Person 1" />
      </div>
      <div class="review-content">
        <h3>Amaka Obi</h3>
        <p>"I was skeptical at first, but Insightify blew me away! The assessment was surprisingly accurate, and the personalized recommendations helped me navigate my tech career path with confidence."</p>
        <div class="stars">★★★★</div>
      </div>
    </div>
    <div class="card">
      <div class="avatar">
        <img src={foot_two} alt="Person 2" />
      </div>
      <div class="review-content">
        <h3>Oluwabukola Olayode</h3>
        <p>"As someone new to the tech world, Insightify was a game-changer for me. The assessments were engaging, and the recommendations were spot-on"</p>
        <div class="stars">★★★★★</div>
      </div>
    </div>
    <div class="card">
      <div class="avatar">
        <img src={foot_three} alt="Person 3" />
      </div>
      <div class="review-content">
        <h3>Benedict Ayo</h3>
        <p>"Insightify helped me unlock my full potential! The assessment was thorough, and the personalized learning recommendations gave me the push I needed to pursue my tech dreams. Highly recommend!"</p>
        <div class="stars">★★★★★</div>
      </div>
    </div>
    <div class="card">
      <div class="avatar">
        <img src={foot_three} alt="Person 4" />
      </div>
      <div class="review-content">
        <h3>Ebere Umeh</h3>
        <p>"The assessment results were so insightful and helped me understand myself better. Plus, the platform's user-friendly interface made the whole experience a breeze!"</p>
        <div class="stars">★★★★★</div>
      </div>
    </div>
  </div>
  </div>
</div>
 {/* Newsletter Section */}
 <div className="newsletter-section">
          <h1>Subscribe to Our Newsletter</h1>
          <div className="email-input">
            <label htmlFor="email" className="email-label">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" className="email-input-box" />
            </div>
            <button className="subscribe-button">SUBSCRIBE</button>
            </div>

            <div className='layer-three'>
            {/* Footer section */}
  <footer className='footer'>
    <div className='insightify-section'>
      <h3>Insightify</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur.<br/> Morbi massa feugiat gravida a senectus sit cursus.<br/> Semper pulvinar sed tortor porta habitant congue morbi amet at. <br/> Dictumst ipsum orci est diam odio. <br/>Nibh ac dui nulla facilisis neque dui t diam odio.<br/> Nibh ac dui nulla facilisis neque dui t
      </p>
    </div>
    <div className='navigate-section'>
      <h3>NAVIGATE</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Explore Tech4Dev Opportunities</a></li>
        <li><a href="/">Result</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <p>Address: 8502 Preston Rd. Inglewood, Maine 98380</p>
    </div>
    <div className='connect-section'>
      <h3>CONNECT WITH US</h3>
      <ul>
        <li>Address: 8502 Preston Rd. Inglewood, Maine 98380</li>
        <li>Email: example@example.com</li>
        <li>Social: <a href="/">Facebook</a>, <a href="/">Twitter</a>, <a href="/">Instagram</a></li>
      </ul>
    </div>
  </footer>
</div>


            
            
            </div>
  );
}

export default Home;

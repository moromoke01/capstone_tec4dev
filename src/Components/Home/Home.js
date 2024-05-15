import React from 'react';
import './Home.css';
import image from '../../Assets/image (2).png';
import foot_one from '../../Assets/img1.jpeg';
import foot_two from '../../Assets/img2.jpeg';
import foot_three from '../../Assets/img3.jpeg';
// import foot_four from '../../Assets/Frame 57.png';
import Freq from '../FAQ/freq';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { useForm, ValidationError } from '@formspree/react';


const Home = () => {
  const [state, handleSubmit] = useForm("mjvnlvdd");
  if (state.succeeded) {
    console.log("success!");
        document.getElementById("contact-form").reset();
}
  // const progress = 80; bikonu whats this cpode for?
  // function getRandomPosition() {
  //   const maxX = window.innerWidth - 100;
  //   const maxY = window.innerHeight - 100;
  //   const randomX = Math.random() * maxX;
  //   const randomY = Math.random() * maxY;
  //   return { left: randomX, top: randomY };
  // }

  return (
    <>
      <Navbar />
      <div className='containerbody'>
        <div className='hero-section-content'>
          <h1>Unleashing Your Tech Skills Potential</h1>
          <h2>Welcome to Insightify, your ultimate destination for unlocking your true potential in the vast world of technology. At Insightify, we believe that every individual possesses unique talents and abilities waiting to be discovered and harnessed. 
          With our cutting-edge psychometric tests tailored specifically for tech skills, we are dedicated to helping you understand your strengths, identify areas for growth, and embark on a journey of continuous improvement. </h2>
        </div>
       <div><a href="/signUp" ><button type="button" className="focus:outline-none text-white bg-customPurple hover:bg-customDarkPurple focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Take Test</button></a></div>
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

      <div class='flex justify-center'>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="bg-white rounded-lg p-6">
      <h2 class="font-bold text-3xl md:text-4xl mb-4">Our Mission</h2>
      <h4 class="text-lg md:text-xl">Our mission at Insightify is simple yet profound:<br/><br/>To empower individuals like you to thrive in the fast-paced and dynamic field of technology.<br/><br/>We are committed to providing you with the tools, resources, and insights needed to excel in your tech career and achieve your professional goals.</h4>
    </div>
    <div class="bg-white rounded-lg p-6">
      <h2 class="font-bold text-3xl md:text-4xl mb-4">Our Commitment To Excellence</h2>
      <h4 class="text-lg md:text-xl">At Insightify, excellence is not just a goal; it's our standard. We are dedicated to upholding the highest standards of quality, integrity, and professionalism in everything we do.<br/><br/>Whether you're a seasoned tech professional looking to level up your skills or a newcomer eager to break into the industry, Insightify is here to support you every step of the way.</h4>
    </div>
    <div class="bg-white rounded-lg p-6">
      <h2 class="font-bold text-3xl md:text-4xl mb-4">Take Your Test</h2>
      <h4 class="text-lg md:text-xl">Embark on your tech journey to unlock your full potential.<br/>Start exploring and delve into your behavior, strengths, and weaknesses to uncover the tech skills that align with you perfectly.<br/><br/>Insightify carefully analyzes your individual traits to craft personalized learning paths that match your unique goals and aspirations.</h4>
    </div>
    <div class="bg-white rounded-lg p-6">
      <h2 class="font-bold text-3xl md:text-4xl mb-4">Accurate Career Recommendations</h2>
      <h4 class="text-lg md:text-xl">Unlock your professional potential with our Accurate Career Recommendations.<br/><br/>Our advanced algorithm considers your skills, experiences, and career goals to offer personalized advice tailored just for you.<br/><br/>Say goodbye to guesswork and hello to a clear path forward with Insightify</h4>
    </div>
  </div>
</div>
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

       {/* Mission Statement Section */}
      <div className="bg-[#27AE6024] px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5">
          <div className="m-5 bg-white rounded-lg p-6 shadow-lg">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">Our Mission</h2>
            <h4 className="text-lg md:text-xl">
              Our mission at Insightify is simple yet profound: To empower individuals like you to thrive in the fast-paced and dynamic field of technology. We are committed to providing you with the tools, resources, and insights needed to excel in your tech career and achieve your professional goals.
            </h4>
          </div>
          <div className="m-5 bg-white rounded-lg p-6 shadow-lg">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">Our Commitment To Excellence</h2>
            <h4 className="text-lg md:text-xl">
              At Insightify, excellence is not just a goal; it's our standard. We are dedicated to upholding the highest standards of quality, integrity, and professionalism in everything we do. Whether you're a seasoned tech professional looking to level up your skills or a newcomer eager to break into the industry, Insightify is here to support you every step of the way.
            </h4>
          </div>
          <div className="m-5 bg-white rounded-lg p-6 shadow-lg">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">Take Your Test</h2>
            <h4 className="text-lg md:text-xl">
              Embark on your tech journey to unlock your full potential. Start exploring and delve into your behavior, strengths, and weaknesses to uncover the tech skills that align with you perfectly. Insightify carefully analyzes your individual traits to craft personalized learning paths that match your unique goals and aspirations.
            </h4>
          </div>
          <div className="m-5 bg-white rounded-lg p-6 shadow-lg">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">Accurate Career Recommendations</h2>
            <h4 className="text-lg md:text-xl">
              Unlock your professional potential with our Accurate Career Recommendations. Our advanced algorithm considers your skills, experiences, and career goals to offer personalized advice tailored just for you. Say goodbye to guesswork and hello to a clear path forward with Insightify.
            </h4>
          </div>
        </div>
      </div>

    <div className="nextone w-full py-8 px-4 bg-purple-900 text-white text-center">
      <div><h3 className="text-2xl md:text-3xl font-bold mb-4">Join Insightify to get proven results</h3></div>
      <div className="flex flex-wrap justify-center">
        <div className="flex-1 md:flex-none max-w-xs md:max-w-none md:flex-initial mx-2 mb-4">
          <h5 className="text-lg font-semibold">10,000+</h5>
          <h4 className="text-base">Registered<br/>Users</h4>
        </div>
        <div className="flex-1 md:flex-none max-w-xs md:max-w-none md:flex-initial mx-2 mb-4">
          <h5 className="text-lg font-semibold">92%</h5>
          <h4 className="text-base">Career Match<br/>Accuracy</h4>
        </div>
        <div className="flex-1 md:flex-none max-w-xs md:max-w-none md:flex-initial mx-2 mb-4">
          <h5 className="text-lg font-semibold">5,000+</h5>
          <h4 className="text-base">Who have successfully <br/>transitioned into tech</h4>
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
      <div className="bg-[#27AE6024] px-5 ">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-semibold leading-loose text-black">
            We’ve got a lot of testimonials. See what people <br/>have to say about our platform.</h2>
        </div>
        <div className="mr-6 grid grid-cols-1 md:grid-cols-2 gap-4 px-5">
          {[
            {
              img: foot_one,
              name: "Amaka Obi",
              review: "I was skeptical at first, but Insightify blew me away! The assessment was surprisingly accurate, and the personalized recommendations helped me navigate my tech career path with confidence.",
              stars: "★★★★",
            },
            {
              img: foot_three,
              name: "Justina Olayode",
              review: "As someone new to the tech world, Insightify was a game-changer for me. The assessments were engaging, and the recommendations were spot-on.",
              stars: "★★★★",
            },
            {
              img: foot_three,
              name: "Benedicta Ayorinde",
              review: "Insightify helped me unlock my full potential! The assessment was thorough, and the personalized learning recommendations gave me the push I needed to pursue my tech dreams. Highly recommend!",
              stars: "★★★★",
            },
            {
              img: foot_one,
              name: "Ebere Umeh",
              review: "The assessment results were so insightful and helped me understand myself better. Plus, the platform's user-friendly interface made the whole experience a breeze!",
              stars: "★★★★",
            },
          ].map((testimonial, index) => (
            <div key={index} className="m-5 bg-white rounded p-5 shadow-lg">
              <div className="w-14 h-14 rounded-full overflow-hidden mb-2.5">
                <img src={testimonial.img} alt={`Person ${index + 1}`} className="object-cover" />
              </div>
              <div>
                <h3 className="m-0 mb-1.5">{testimonial.name}</h3>
                <p className="m-0 mb-2.5">{testimonial.review}</p>
                <div className="text-yellow-400 text-xl">{testimonial.stars}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* newsletter  */}
      <aside className="newsletter-section p-4 my-8 bg-white border  rounded-lg shadow-md sm:p-6 lg:p-8 "
    >
      <h1 className="mb-3 text-md  font-bold">Subscribe to Our Newsletter</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
    <div data-style="clean" className="flex items-center mb-3">
    <div data-element="fields" data-stacked="false"
      className="flex items-center w-full seva-fields formkit-fields">
      <div className="relative w-full mr-3 formkit-field">
        
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          className="formkit-input bg-transparent border-none border-b-2 border-purple-500 text-gray-900 text-md focus:ring-0 focus:border-purple-500 block w-full pl-3 p-2.5  dark:text-white"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <button type='submit' disabled={state.submitting} className="px-5 py-3 text-sm font-medium text-center text-white bg-customPurple rounded-lg cursor-pointer hover:bg-purple-800 focus:ring-4 focus:ring-bg-customPurple ml-0">SUBSCRIBE</button>
    </div>
  </div>
</form>
</aside>
  <Footer />
</>
  );
}
export default Home;

            
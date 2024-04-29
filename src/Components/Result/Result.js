// import React, { useState } from 'react';
// import './Result.css';
// import youtube from '../../Assets/4.png';
// import medium from '../../Assets/5.png';
// import coursera from '../../Assets/6.png';
// import udemy from '../../Assets/7.png';
// import bootone from '../../Assets/1.png';
// import boottwo from '../../Assets/2.png';
// import bootthree from '../../Assets/3.png';
// import Navbar from '../Navbar/Navbar';

// const Result = () => {
//   const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
//   const [isBlurry, setIsBlurry] = useState(false); // State to toggle blur effect

//   const handleFeedbackClick = () => {
//     setIsFeedbackOpen(!isFeedbackOpen);
//     setIsBlurry(!isBlurry); // Toggle blur effect
//   };
//   return (
//     <div className={`overlay-container ${isBlurry ? 'blur-effect' : ''}`}>
//       <div className="blurry-content">
//         <nav>
//         <Navbar />
//         </nav>
//         <div>
//           <h3 className="name">You have successfully completed your career psychometric test with Insightify. Below is your result analysis strictly computed based on your score in all the five sections of the assessment:</h3>
//         </div>
//         <div>
//           <div>
//             <h3 className="after">After successfully reviewing your assessment, the career path our system analysis that you will thrive effortlessly in is:</h3>
//             <h1 className="track">SOFTWARE DEVELOPMENT</h1>
//             <button className="feedback-button" onClick={handleFeedbackClick}>
//               Give us your feedback
//             </button>
//           </div>
//           <div className="container_two">
//             <h1 className="your-result">YOUR RESULT ANALYSIS</h1>
//             <h4 className="pass">This assessment consists of five (5) compulsory sections, each section carries ten (10) compulsory questions with two (2) marks each. The total mark allocated to each section is twenty marks making it a sum total of 100 marks for the entire assessment.<br/> Check the table below for the breakdown of your result from each section:</h4>
//             <table>
//               <tr>
//                 <th>SECTION 1</th>
//                 <td>
//                   <div className="progress-bar-container">
//                     <div className="progress-bar"></div>
//                   </div>
//                 </td>
//                 <td>Lorem ipsum dolor sit amet consectetur. <br/>Porta ut pretium aliquet sed placerat venenatis purus. <br/>Habitasse et blandit.</td>
//                 <td><h3>70%</h3></td>
//               </tr>
//               <tr>
//                 <th>SECTION 2</th>
//                 <td> <div className="progress-bar-container">
//                   <div className="progress-bar"></div>
//                 </div></td>
//                 <td>Lorem ipsum dolor sit amet consectetur. <br/>Porta ut pretium aliquet sed placerat venenatis purus. <br/>Habitasse et blandit.</td>
//                 <td><h3>70%</h3></td>
//               </tr>
//               <tr>
//                 <th>SECTION 3</th>
//                 <td> <div className="progress-bar-container">
//                   <div className="progress-bar"></div>
//                 </div></td>
//                 <td>Lorem ipsum dolor sit amet consectetur. <br/>Porta ut pretium aliquet sed placerat venenatis purus. <br/>Habitasse et blandit.</td>
//                 <td><h3>70%</h3></td>
//               </tr>
//               <tr>
//                 <th>SECTION 4</th>
//                 <td> <div className="progress-bar-container">
//                   <div className="progress-bar"></div>
//                 </div></td>
//                 <td>Lorem ipsum dolor sit amet consectetur. <br/>Porta ut pretium aliquet sed placerat venenatis purus. <br/>Habitasse et blandit.</td>
//                 <td><h3>70%</h3></td>
//               </tr>
//               <tr>
//                 <th>SECTION 5</th>
//                 <td> <div className="progress-bar-container">
//                   <div className="progress-bar"></div>
//                 </div></td>
//                 <td>Lorem ipsum dolor sit amet consectetur. <br/>Porta ut pretium aliquet sed placerat venenatis purus. <br/>Habitasse et blandit.</td>
//                 <td><h3>70%</h3></td>
//               </tr>
//             </table>
//           </div>
//         </div>
//         <div>
//           <h1 className="your-result name">RECOMMENDATION</h1>
//           <h4 className="name">These recommendations contain links to various videos, articles, books and many more that you can use as study guide to start your tech career. Also, links to recommended Tech4Dev programs meant just for you will be provided under this section. </h4>
//           <div className="name">
//             <h3>Recommended Videos and articles for career path:</h3>
//             <div className="cards">
//               <div className="card" id="medium">
//                 <a href="https://medium.com/" target="_blank"><img src={medium} alt="Medium"/></a>
//                 <h3>Card Title</h3>
//                 <p>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content.</p>
//               </div>
//               <div className="card" id="medium">
//                 <a href="https://medium.com/" target="_blank"><img src={youtube} alt="Youtube"/></a>
//                 <h3>Card Title</h3>
//                 <p>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content.</p>
//               </div>
//               <div className="card" id="coursera">
//                 <a href="https://www.coursera.org/" target="_blank"><img src={coursera} alt="Coursera"/></a>
//                 <h3>Card Title</h3>
//                 <p>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content.</p>
//               </div>
//               <div className="card" id="udemy">
//                 <a href="https://www.udemy.com/" target="_blank"><img src={udemy} alt="Udemy"/></a>
//                 <h3>Card Title</h3>
//                 <p>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content.</p>
//               </div>
//             </div>
//           </div>
//           <span className="span"><p>You can download your result analysis and recommended videos/articles here: </p>
//           <p className="download"> Download Result Analysis <i className="fa fa-download" aria-hidden="true"></i></p></span>
//         </div>
//         <div className="two">
//           <h2>Recommended Tech4Dev Programs: </h2>
//           <div className="cards-Re-container">
//             <div className="cards-Re">
//               <img src={bootone} alt="Program One"/>
//               <h2>Women Techsters Fellowship</h2>
//               <p>Women Techsters Fellowship is a 1-year virtual learning program delivered through 6 months of intensive training, a 6-month internship based on performance and enrolment into a mentorship program to equip women with skills to build tech careers and tech-enabled businesses. Multiple cohorts will be executed over seven years using...</p>
//               <a href="#" className="register"><p>Register for the next bootcamp</p></a>
//             </div>
//             <div className="cards-Re">
//               <img src={boottwo} alt="Program Two"/>
//               <h2>Women Techsters Bootcamp</h2>
//               <p>The Women Techsters Bootcamp is a 3-week monthly training designed to introduce women and girls to intermediate level technology skills along 5 learning paths to help them jump-start careers or fill in knowledge gaps from emerging technologies. The Bootcamps serve as a guide for the bootsters to determine their preferred career choices.</p>
//               <a href="#" className="register"><p>Register for the next bootcamp</p></a>
//             </div>
//             <div className="cards-Re">
//               <img src={bootthree} alt="Program Three"/>
//               <h2>Digital for All Challenge (DFA)</h2>
//               <p>The #DigitalforAllChallenge is a free digital skilling program and competition designed to drive digital literacy of youth across Nigeria and spur interest in acquiring digital skills and certifications via onsite and online platforms. It is aimed at equipping men and women between the ages of 16 – 45 years with digital skills as a means of enabling equal access....</p>
//               <a href="#" className="register"><p>Register for the next bootcamp</p></a>
//             </div>
//           </div>
//         </div>
//         <footer className='footer'>
//     <div className='insightify-section'>
//       <h3>Insightify</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur.<br/> Morbi massa feugiat gravida a senectus sit cursus.<br/> Semper pulvinar sed tortor porta habitant congue morbi amet at. <br/> Dictumst ipsum orci est diam odio. <br/>Nibh ac dui nulla facilisis neque dui t diam odio.<br/> Nibh ac dui nulla facilisis neque dui t
//       </p>
//     </div>
//     <div className='navigate-section'>
//       <h3>NAVIGATE</h3>
//       <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="/">Explore Tech4Dev Opportunities</a></li>
//         <li><a href="/">Result</a></li>
//         <li><a href="/">About Us</a></li>
//         <li><a href="/">Contact</a></li>
//       </ul>
//       <p>Address: 8502 Preston Rd. Inglewood, Maine 98380</p>
//     </div>
//     <div className='connect-section'>
//       <h3>CONNECT WITH US</h3>
//       <ul>
//         <li>Address: 8502 Preston Rd. Inglewood, Maine 98380</li>
//         <li>Email: example@example.com</li>
//         <li>Social: <a href="/">Facebook</a>, <a href="/">Twitter</a>, <a href="/">Instagram</a></li>
//       </ul>
//     </div>
//   </footer>
//       </div>
//       {isFeedbackOpen && (
//         <div className="feedback-form">
//           <form>
//             <label htmlFor="feedback">Feedback:</label>
//             <textarea id="feedback" name="feedback" rows="4" cols="50"></textarea>
//             <button type="submit">Submit</button>
//           </form>
          
//         </div>
        
//       )}

//     </div>
//   );
// };

// export default Result;

import React from 'react';
import { Link } from 'react-router-dom';
import './Result.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ComingSoon = () => {
  return (
    <>
      <Navbar />
      <div className="coming-soon-container">
        <div className="content">
          <h1>COMING SOON</h1>
          <p>This Result Page is under construction. Thank you for your patience. Please check back later!</p>
          <Link to="/">
            <button className="back-to-home-button">BACK TO HOME</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComingSoon;








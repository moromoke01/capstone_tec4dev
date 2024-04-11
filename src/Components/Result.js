import React from 'react'
import logo from '../Assets/logo.png'
import './Result.css';
import youtube from '../Assets/4.png'
import medium from '../Assets/5.png'
import coursera from '../Assets/6.png';
import udemy from '../Assets/7.png';
import bootone from '../Assets/1.png'
import boottwo from '../Assets/2.png'
import bootthree from '../Assets/3.png'
const Result = () => {
  
  return (
    <div>
        <nav>
        <div className='container'>
        <img src={logo} className='logo'/>
        </div>
        </nav>
        <div>
          <h3 className='name'>Hi Jane,</h3>
          <h3 className='name'>You have successfully completed your career psychometric test with Insightify. Below is your result analysis strictly computed based on your score in all the five sections of the assessment:</h3>
        </div>
        <div>
          <div>
              <h3 className='after'>After successfully reviewing your assessment, the career path our system analysis that you will thrive effortlessly in is:</h3>
            <h1 className='track'>SOFTWARE DEVELOPMENT</h1>
          </div>

          <div className='container_two'>
              <h1 className='your-result'>YOUR RESULT ANALYSIS</h1>
              <h4 className='pass'>This assessment consists of five (5) compulsory sections, each section carries ten (10) compulsory questions with two (2) marks each. The total mark allocated to each section is twenty marks making it a sum total of 100 marks for the entire assessment.<br/> Check the table below for the breakdown of your result from each section:</h4>

              <table>
                  <tr>
                    <th>SECTION 1</th>
                    <td>
                          <div class="progress-bar-container">
                      <div class="progress-bar"></div>
                    </div>
                    </td>
                    <td>Lorem ipsum dolor sit amet consectetur. <br/>Porta ut pretium aliquet sed placerat venenatis purus. <br/>Habitasse et blandit.</td>
                    <td><h3>70%</h3></td>
                  </tr>
                  <tr>
                    <th>SECTION 2</th>
                    <td> <div class="progress-bar-container">
                      <div class="progress-bar"></div>
                    </div></td>
                    <td>Lorem ipsum dolor sit amet consectetur. <br/>Porta ut pretium aliquet sed placerat venenatis purus. <br/>Habitasse et blandit.</td>
                    <td><h3>70%</h3></td>
                  </tr>
                  <tr>
                    <th>SECTION 3</th>
                    <td> <div class="progress-bar-container">
                      <div class="progress-bar"></div>
                    </div></td>
                    <td>Lorem ipsum dolor sit amet consectetur. <br/>Porta ut pretium aliquet sed placerat venenatis purus. <br/>Habitasse et blandit.</td>
                    <td><h3>70%</h3></td>
                  </tr>
                  <tr>
                    <th>SECTION 4</th>
                    <td> <div class="progress-bar-container">
                      <div class="progress-bar"></div>
                    </div></td>
                    <td>Lorem ipsum dolor sit amet consectetur. <br/>Porta ut pretium aliquet sed placerat venenatis purus. <br/>Habitasse et blandit.</td>
                    <td><h3>70%</h3></td>
                  </tr>
                  <tr>
                    <th>SECTION 5</th>
                    <td> <div class="progress-bar-container">
                      <div class="progress-bar"></div>
                    </div></td>
                    <td>Lorem ipsum dolor sit amet consectetur. <br/>Porta ut pretium aliquet sed placerat venenatis purus. <br/>Habitasse et blandit.</td>
                    <td><h3>70%</h3></td>
                  </tr>
          </table>
          </div>
        </div>
        <div>
          <h1 className='your-result name'>RECOMMENDATION</h1>
          <h4 className='name '>These recommendations contain links to various videos, articles, books and many more that you can use as study guide to start your tech career. Also, links to recommended Tech4Dev programs meant just for you will be provided under this section. </h4>
          <div className='name'>
            <h3>Recommended Videos and articles for career path:</h3>
                            <div className='cards'>
                            <div class="card" id="medium">
                    <a href="https://medium.com/" target="_blank"><img src={medium}/></a>
                      <h3>Card Title</h3>
                      <p>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content.</p>
                    </div>
                    <div class="card" id="medium">
                    <a href="https://medium.com/" target="_blank"><img src={youtube}/></a>
                      <h3>Card Title</h3>
                      <p>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content.</p>
                    </div>
                    <div class="card" id="coursera">
                    <a href="https://www.coursera.org/" target="_blank"><img src={coursera}/></a>
                      <h3>Card Title</h3>
                      <p>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content.</p>
                    </div>
                    <div class="card" id="udemy">
                    <a href="https://www.udemy.com/" target="_blank"><img src={udemy}/></a>
                      <h3>Card Title</h3>
                      <p>Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content.</p>
                    </div>
  </div>
          </div>
          <span className='span'><p>You can download your result analysis and recommended videos/articles here: </p>
          <p className='download'> Download Result Analysis <i class="fa fa-download" aria-hidden="true"></i></p></span>
        </div>

        <div className='two'>
  <h2>Recommended Tech4Dev Programs: </h2>
  <div className='cards-Re-container'>
    <div className='cards-Re'>
      <img src={bootone} alt="Program One"/>
      <h2>Women Techsters Fellowship</h2>
      <p>Women Techsters Fellowship is a 1-year virtual learning program delivered through 6 months of intensive training, a 6-month internship based on performance and enrolment into a mentorship program to equip women with skills to build tech careers and tech-enabled businesses. Multiple cohorts will be executed over seven years using...</p>
      <a href='#' className='register'><p>Register for the next bootcamp</p></a>
    </div>

    <div className='cards-Re'>
      <img src={boottwo} alt="Program Two"/>
      <h2>Women Techsters Bootcamp</h2>
      <p>The Women Techsters Bootcamp is a 3-week monthly training designed to introduce women and girls to intermediate level technology skills along 5 learning paths to help them jump-start careers or fill in knowledge gaps from emerging technologies. The Bootcamps serve as a guide for the bootsters to determine their preferred career choices.</p>
      <a href='#' className='register'><p>Register for the next bootcamp</p></a>
    </div>

    <div className='cards-Re'>
      <img src={bootthree} alt="Program Three"/>
      <h2>Digital for All Challenge (DFA)</h2>
      <p>The #DigitalforAllChallenge is a free digital skilling program and competition designed to drive digital literacy of youth across Nigeria and spur interest in acquiring digital skills and certifications via onsite and online platforms. It is aimed at equipping men and women between the ages of 16 – 45 years with digital skills as a means of enabling equal access....</p>
     <a href='#' className='register'><p>Register for the next bootcamp</p></a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Result
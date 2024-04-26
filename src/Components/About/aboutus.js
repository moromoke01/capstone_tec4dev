import React from 'react';
import Navbar from '../Navbar/Navbar';
import './aboutus.css'; 
import Footer from '../Footer/Footer';
import team01 from '../About/Assets/Mojisola O. Akinrelere.png'
import team02 from '../About/Assets/Habiba.jpg'
import team03 from '../About/Assets/IFUNANYA EGBUNIWE.jpg'
import team04 from '../About/Assets/Oluwatoyin O. Ajayi.jpeg'
import team05 from '../About/Assets/Hamidat Mohammed.jpeg'
import team06 from '../About/Assets/Chioma Enunwoke.jpg'
import team07 from '../About/Assets/Ibinabo Adiela.jpg'
import team08 from '../About/Assets/Janet Omokhunu.png'
import team09 from '../About/Assets/Moromoke .jpg'
import team10 from '../About/Assets/Iyanuoluwa A. Hassan.jpg'
import team11 from '../About/Assets/Amarachi Nwakaibeya.jpg'
import team12 from '../About/Assets/Dummy.png'
import team13 from '../About/Assets/Dummy.png'
import team14 from '../About/Assets/Dummy.png'
import team15 from '../About/Assets/Dummy.png'
import team16 from '../About/Assets/Dummy.png'

const teamMembers = [
  {
      imgUrl: team01,
      name: 'Mojisola Akinrelere',
      position: 'Frontend Developer'
  },

  {
      imgUrl: team02,
      name: 'Habiba Hussein',
      position: 'Data Scientist'
  },

  {
      imgUrl: team03,
      name: 'Ifunanya Egbuniwe',
      position: 'Data Scientist'
  },

  {
      imgUrl: team04,
      name: 'Oluwatoyin Ajayi',
      position: 'Product Designer'
  },

  {
    imgUrl: team05,
    name: 'Hamidat Mohammed',
    position: 'Data Scientist'
},

{
  imgUrl: team06,
  name: 'Chioma Enunwoke',
  position: 'Cybersecurity Analyst'
},

{
  imgUrl: team07,
  name: 'Ibinabo Adiela',
  position: 'Data Scientist'
},

{
  imgUrl: team08,
  name: 'Janet Omokhunu',
  position: 'Product Designer'
},
{
  imgUrl: team09,
  name: 'Moromoke Bello',
  position: 'Product Manager'
},
{
  imgUrl: team10,
  name: 'Iyanuoluwa Hassan',
  position: 'Product Designer'
},
{
  imgUrl: team11,
  name: 'Amarachi Nwakaibeya',
  position: 'Mobile App Developer'
},
{
  imgUrl: team12,
  name: 'Modesta Ugwu',
  position: 'Product Manager'
},
{
  imgUrl: team13,
  name: 'Morenikeji Ofongo',
  position: 'Product Manager'
},
{
  imgUrl: team14,
  name: 'Memuna Saaani',
  position: 'Frontend Developer'
},
{
  imgUrl: team15,
  name: 'Chinanu Uhegbu',
  position: 'Cybersecurity Analyst'
},
{
  imgUrl: team16,
  name: 'Grace Ogundaini',
  position: 'Data Scientist'
},
]

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <Navbar />
        <section className="about-section">
          <h1 className="section-heading">WHO WE ARE</h1>
          <p className="section-content">
            Insightify serves as a host where psychology meets technology to help you unlock insights and discover hidden potentials in different people.<br/> <br/>
            We believe in the power of self-discovery and personal growth. Our mission is to provide you with the tools and resources you need to better understand yourself and navigate career challenges with confidence. <br/> <br/>
            If you are curious about your personality, strengths, values, or preferences, Insightify offers a range of psychometric assessments designed to illuminate different aspects of who you are. From personality tests based on well-established frameworks to innovative quizzes tailored to specific areas of interest, our assessments are backed by research and crafted with care. <br/> <br/>
          </p>
        </section>

        <section className='about-section2'>
          <h1 className="section-heading">OUR TEAM</h1>
          <div className='team__wrapper'>
            {teamMembers.map((item, index) => (
              <div className='team__item' key={index}>
                <div className='team__img'>
                  <img src={item.imgUrl} alt='' />
                </div>
                <div className='team__details'>
                  <h4>{item.name}</h4>
                  <p className='description'>{item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default AboutUs;

import React from 'react';
import Navbar from '../quiz/Navbar';
import './aboutus.css'; 

const AboutUsPage = () => {
  // Sample team data
  const teamMembers = [
    { id: 1, name: 'Akinrelere Mojisola', role: 'Frontend Developer', imageUrl: '5-PhotoRoomghnkm.png' },
    { id: 2, name: 'Memuna Saani', role: 'Frontend DeveloperO', imageUrl: '5-PhotoRoomghnkm.png' },
    { id: 3, name: 'Iyanu', role: 'Product Designer', imageUrl: '5-PhotoRoomghnkm.png' },
    // Add more team members as needed
  ];

  return (
    <div className="about-us-container">
      <Navbar /> {/* Render the Navbar component here */}
      <section className="about-section">
        <h1 className="section-heading">WHO WE ARE</h1>
        <p className="section-content">
          Insightify serves as a host where psychology meets technology to help you unlock insights and discover hidden potentials in different people.<br/> <br/>
          We believe in the power of self-discovery and personal growth. Our mission is to provide you with the tools and resources you need to better understand yourself and navigate career challenges with confidence. <br/> <br/>
          you are curious about your personality, strengths, values, or preferences, Insightify offers a range of psychometric assessments designed to illuminate different aspects of who you are. From personality tests based on well-established frameworks to innovative quizzes tailored to specific areas of interest, our assessments are backed by research and crafted with care. <br/> <br/>
        </p>
        </section>

      <section className='about-section2'>
        <h1 className="section-heading">OUR TEAM</h1>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img src={require(`../../Assets/${member.imageUrl}`).default} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;

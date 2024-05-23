import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../../Assets/Vector F.png'; // Import Facebook icon image
import TwitterIcon from '../../Assets/Vector T.png'; // Import Twitter icon image
import InstagramIcon from '../../Assets/Vector I.png'; // Import Instagram icon image
import LinkedInIcon from '../../Assets/Vector L.png'; // Import LinkedIn icon image
import './footer.css';
import { MenuItems } from '../../Components/Navbar/MenuItems';

function Footer() {
  return (
    <footer className="footer bg-[#9C13BE] text-white p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* div1 */}
      <div className="insightify-section mb-6 md:mb-0">
        <div className="border-wrapper">
          <h3 className="font-bold custom-h3">INSIGHTIFY</h3>
        </div>
        <p className="text-white mt-3">
          At Insightify, excellence is not just a goal, it is our standard. We are dedicated to upholding the highest standards of quality, integrity, and professionalism in everything we do.
        </p>
      </div>
      {/* div2 */}
      <div className="navigate-section">
        <div className="border-wrapper">
          <h3 className="font-bold custom-h3">NAVIGATE</h3>
        </div>
        <ul className="list-none mt-3">
          {MenuItems.map((item, index) => (
            <li key={index} className="mb-2 text-lg">
              <Link to={item.url} className="hover:underline">{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* div3 */}
      <div className="connect-section">
        <div className="border-wrapper">
          <h3 className="font-bold custom-h3">CONNECT WITH US</h3>
        </div>
        <ul className="list-none mt-3">
          <li className="mb-2">Address:
            <br />
            8502 Preston Rd. Inglewood, Maine 98380
          </li>
          <li className="mb-2">Email:
            <br /> info@insightify.com
          </li>
          <li className='social-icon'>Socials:
            <div className="flex justify-center md:justify-start space-x-2 mt-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './footer.css'
import { MenuItems } from '../../Components/Navbar/MenuItems'; // Assuming MenuItems is defined in a separate file

function Footer() {
  return (
    <footer className="bg-[#9C13BE] text-white  p-25  flex flex-col md:flex-row justify-around">
      <div className="insightify-section p-25  mb-6 md:mb-0 pr-10 md:border-r md:border-white">
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Insightify</h3>
        <p className="text-md md:text-base">
          At Insightify, excellence is not just a goal, it is our standard. We are dedicated to upholding the highest standards of quality, integrity, and professionism in everything we do.
        </p>
      </div>

      <div className="navigate-section mr-10 md:mr-20">
        <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">NAVIGATE</h3>
        <ul>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className="hover:underline">{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="connect-section">
        <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">CONNECT WITH US</h3>
        <ul>
          <li className="mb-2">Address: 8502 Preston Rd. Inglewood, Maine 98380</li>
          <li className="mb-2">Email: example@example.com</li>
          <li>Social: 
            <a href="/" className="ml-2 md:ml-4 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>, 
            <a href="/" className="ml-2 md:ml-4 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>, 
            <a href="/" className="ml-2 md:ml-4 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

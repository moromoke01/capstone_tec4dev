import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

import { MenuItems } from '../../Components/Navbar/MenuItems'; // Assuming MenuItems is defined in a separate file

function Footer() {
  return (
    <footer className="bg-customPurple text-white p-5 flex justify-around" style={{ width: '100%' }}>
      <div className="insightify-section mr-10 pr-10 border-r border-white">
        <h3 className="text-3xl font-bold mb-4">Insightify</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur.<br/> Morbi massa feugiat gravida a senectus sit cursus.<br/> Semper pulvinar sed tortor porta habitant congue morbi amet at. <br/> Dictumst ipsum orci est diam odio. <br/>Nibh ac dui nulla facilisis neque dui t diam odio.<br/> Nibh ac dui nulla facilisis neque dui t
        </p>
      </div>

      {/* Add spacing between sections */}
      <div className="navigate-section mr-10" style={{ margin: '0 20px' }}>
        {/* Reduce font size here */}
        <h3 className="text-lg font-bold mb-3">NAVIGATE</h3>
        <ul>
          {/* Map through menu items and create links */}
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className="hover:underline">{item.title}</Link>
            </li>
          ))}
        </ul>
        {/* <p>Address: 8502 Preston Rd. Inglewood, Maine 98380</p> */}
      </div>

      {/* Add spacing between sections */}
      <div className="connect-section" style={{ margin: '0 20px' }}>
        {/* Reduce font size here */}
        <h3 className="text-lg font-bold mb-3">CONNECT WITH US</h3>
        <ul>
          <li>Address: 8502 Preston Rd. Inglewood, Maine 98380</li>
          <li>Email: example@example.com</li>
          <li>Social: <a href="/" className="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="/" className="hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="/" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

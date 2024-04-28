import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './footer.css'
import { MenuItems } from '../../Components/Navbar/MenuItems'; // Assuming MenuItems is defined in a separate file

function Footer() {
  return (
    <footer className="bg-[#9C13BE] text-white p-6 grid md:grid-cols-3 gap-4">
      {/* div1 */}
      <div className="insightify-section mb-6 md:mb-0 md:border-r md:border-white">
      <h3 className="text-xl md:text-2xl font-bold mb-4">INSIGHTIFY</h3>
        <p className="">
          At Insightify, excellence is not just a goal, it is our standard. We are dedicated to upholding the highest standards of quality, integrity, and professionism in everything we do.
        </p>
      </div>
      {/* div2 */}
      <div className="navigate-section ">
      <h3 className="text-lg font-bold mb-3">NAVIGATE</h3>
        <ul className="list-none">
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className="hover:underline">{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* div3 */}
      <div className="connect-section">
      <h3 className="text-md font-bold mb-3">CONNECT WITH US</h3>
        <ul  className="list-none">
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

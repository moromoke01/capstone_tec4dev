import React from 'react';

function Footer() {
  return (
    <footer className="bg-purple-700 text-white p-5 flex justify-around">
      <div className="insightify-section mr-10 pr-10 border-r border-white">
        <h3 className="text-3xl font-bold mb-3">Insightify</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur.<br/> Morbi massa feugiat gravida a senectus sit cursus.<br/> Semper pulvinar sed tortor porta habitant congue morbi amet at. <br/> Dictumst ipsum orci est diam odio. <br/>Nibh ac dui nulla facilisis neque dui t diam odio.<br/> Nibh ac dui nulla facilisis neque dui t
        </p>
      </div>
      <div className="navigate-section mr-10">
        <h3 className="text-xl font-bold mb-3">NAVIGATE</h3>
        <ul>
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/" className="hover:underline">Explore Tech4Dev Opportunities</a></li>
          <li><a href="/" className="hover:underline">Result</a></li>
          <li><a href="/" className="hover:underline">About Us</a></li>
          <li><a href="/" className="hover:underline">Contact</a></li>
        </ul>
        <p>Address: 8502 Preston Rd. Inglewood, Maine 98380</p>
      </div>
      <div className="connect-section">
        <h3 className="text-xl font-bold mb-3">CONNECT WITH US</h3>
        <ul>
          <li>Address: 8502 Preston Rd. Inglewood, Maine 98380</li>
          <li>Email: example@example.com</li>
          <li>Social: <a href="/" className="hover:underline">Facebook</a>, <a href="/" className="hover:underline">Twitter</a>, <a href="/" className="hover:underline">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
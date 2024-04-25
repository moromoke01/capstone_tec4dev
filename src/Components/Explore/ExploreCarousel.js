import React, { useState } from 'react';
import './explore.css'; // Import your custom CSS styles if needed
import image1 from './1.png';  
import image2 from './2.png';  
import image3 from './3.png';  
import Footer from '../Footer/Footer';
import iconLeft from './icon_left.svg';  // Path to your left arrow icon
import iconRight from './icon_right.svg';
import Navbar from '../Navbar/Navbar';

const slides = [
  {
    id:1,
    title: 'Women Techsters',
    imageUrl: image1,
    altText: "Women Techsters",
    description: [
      "The Women Techsters initiative is aimed at bridging the digital and technology knowledge divide between men and women as well as ensuring equal access to opportunities for all. We are empowering girls and women across Africa with varying degrees of digital, deep tech and soft skills required within the technology ecosystem.",
      "The initiative will empower 5 million African women over the next 10 years (2020-2030) through a series of activities holding simultaneously across different countries.",
      "Our objective is to grow and support an army of tech-empowered girls and women across Africa who will have equal access to decent job opportunities as well as build and scale their ideas into tech-enabled businesses and deep tech startups, which will aid Africa’s economic growth.",
      "OBJECTIVES:",
      "To empower African women to establish start-ups or technology-enabled businesses to build an entrepreneurial mindset in them.",
      "To support women to become digitally enabled, social champions, and owners of businesses.",
      "To bridge the digital divide between men and women in the tech space while contributing to economic growth.",
      "To ultimately improve the socio-economy of the Africa continent by providing skills that will elevate women from poverty.",
    ],
    link:"https://www.tech4dev.com"
    },
    {
      id:2,
      title: 'Women Techsters',
      imageUrl: image2,
      altText: "Women Techsters",
      description: [
        "The Women Techsters initiative is aimed at bridging the digital and technology knowledge divide between men and women as well as ensuring equal access to opportunities for all. We are empowering girls and women across Africa with varying degrees of digital, deep tech and soft skills required within the technology ecosystem.",
        "The initiative will empower 5 million African women over the next 10 years (2020-2030) through a series of activities holding simultaneously across different countries.",
        "Our objective is to grow and support an army of tech-empowered girls and women across Africa who will have equal access to decent job opportunities as well as build and scale their ideas into tech-enabled businesses and deep tech startups, which will aid Africa’s economic growth.",
        "OBJECTIVES:",
        "To empower African women to establish start-ups or technology-enabled businesses to build an entrepreneurial mindset in them.",
        "To support women to become digitally enabled, social champions, and owners of businesses.",
        "To bridge the digital divide between men and women in the tech space while contributing to economic growth.",
        "To ultimately improve the socio-economy of the Africa continent by providing skills that will elevate women from poverty.",
      ],
      link:"https://www.tech4dev.com"
      },
    {
      id:3,
      title: 'Women Techsters',
      imageUrl: image3,
      altText: "Women Techsters",
      description: [
        "The Women Techsters initiative is aimed at bridging the digital and technology knowledge divide between men and women as well as ensuring equal access to opportunities for all. We are empowering girls and women across Africa with varying degrees of digital, deep tech and soft skills required within the technology ecosystem.",
        "The initiative will empower 5 million African women over the next 10 years (2020-2030) through a series of activities holding simultaneously across different countries.",
        "Our objective is to grow and support an army of tech-empowered girls and women across Africa who will have equal access to decent job opportunities as well as build and scale their ideas into tech-enabled businesses and deep tech startups, which will aid Africa’s economic growth.",
        "OBJECTIVES:",
        "To empower African women to establish start-ups or technology-enabled businesses to build an entrepreneurial mindset in them.",
        "To support women to become digitally enabled, social champions, and owners of businesses.",
        "To bridge the digital divide between men and women in the tech space while contributing to economic growth.",
        "To ultimately improve the socio-economy of the Africa continent by providing skills that will elevate women from poverty.",
      ],
      link:"https://www.tech4dev.com"
      },
      {
    id: 4,
    title: 'Women Techsters',
    imageUrl: image1,
    altText: "Women Techsters",
    description: [
      "The Women Techsters initiative is aimed at bridging the digital and technology knowledge divide between men and women as well as ensuring equal access to opportunities for all. We are empowering girls and women across Africa with varying degrees of digital, deep tech and soft skills required within the technology ecosystem.",
      "The initiative will empower 5 million African women over the next 10 years (2020-2030) through a series of activities holding simultaneously across different countries.",
      "Our objective is to grow and support an army of tech-empowered girls and women across Africa who will have equal access to decent job opportunities as well as build and scale their ideas into tech-enabled businesses and deep tech startups, which will aid Africa’s economic growth.",
      "OBJECTIVES:",
      "To empower African women to establish start-ups or technology-enabled businesses to build an entrepreneurial mindset in them.",
      "To support women to become digitally enabled, social champions, and owners of businesses.",
      "To bridge the digital divide between men and women in the tech space while contributing to economic growth.",
      "To ultimately improve the socio-economy of the Africa continent by providing skills that will elevate women from poverty.",
    ],
    link: "https://www.tech4dev.com"
  },
  ];

const ExploreCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const nextSlide = () => {
      if (activeIndex < slides.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    };
  
    const prevSlide = () => {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    };
  
    return (
      <>
     <Navbar />
        <div className="carousel-container relative w-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`carousel-slide ${index === activeIndex ? 'active' : 'inactive'} absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start transition-opacity duration-500 ease-in-out`}>
              <img src={slide.imageUrl} alt={slide.altText} className="carousel-image w-full h-5/6 object-cover" />
              <div className="carousel-description w-full p-5 bg-white text-center">
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                {slide.description.map((paragraph, idx) => <p key={idx} className="mt-2">{paragraph}</p>)}
                <a href={slide.link} target="_blank" rel="noopener noreferrer" className="mt-4 mb-8 inline-block  text-purple-700 px-4 py-2 hover:purple-800">Visit Website</a>
                
                <div className="button-container mt-8 flex justify-center items-center">
                  {activeIndex > 0 && (
                    <button onClick={prevSlide} className="ml-8 prev">
                      <img src={iconLeft} alt="Previous" className="h-6 w-6" />
                    </button>
                  )}
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      className={`indicator-btn mx-1 p-2 ${idx === activeIndex ? 'bg-purple-800' : 'bg-gray-200'} rounded-full`}
                      onClick={() => setActiveIndex(idx)}
                    >...</button>
                  ))}
                  {activeIndex < slides.length - 1 && (
                    <button onClick={nextSlide} className="mr-8 next">
                      <img src={iconRight} alt="Next" className="h-6 w-6" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  };
  
  export default ExploreCarousel;
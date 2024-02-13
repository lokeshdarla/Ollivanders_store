import React, { useState } from 'react';

const imageLinks = [
  "https://harrypottershop.co.uk/cdn/shop/collections/Wands_2048x_68e10031-e505-4b86-994f-24ba144615ea_2048x.jpg?v=1700137199",
  "https://harrypottershop.co.uk/cdn/shop/collections/Wands_2048x_68e10031-e505-4b86-994f-24ba144615ea_2048x.jpg?v=1700137199",
  "https://harrypottershop.co.uk/cdn/shop/collections/Wands_2048x_68e10031-e505-4b86-994f-24ba144615ea_2048x.jpg?v=1700137199",
  "https://harrypottershop.co.uk/cdn/shop/collections/Wands_2048x_68e10031-e505-4b86-994f-24ba144615ea_2048x.jpg?v=1700137199",
];

const HeroCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + imageLinks.length) % imageLinks.length);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageLinks.length);
  };

  return (
    <div id="gallery" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {imageLinks.map((imageLink, index) => (
          <div key={index} className={`hidden duration-700 ease-in-out ${index === activeIndex ? '' : 'opacity-0'}`} data-carousel-item={index === activeIndex ? 'active' : ''}>
            <img
              src={imageLink}
              className="absolute block h-auto max-w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Carousel Item ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button type="button" className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none" data-carousel-prev onClick={handlePrevClick}>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none" data-carousel-next onClick={handleNextClick}>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default HeroCarousel;

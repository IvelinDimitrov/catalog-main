// src/ClientSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    '/images/clients/praktiker-logo-png-transparent.png',
    '/images/clients/logo.png',
    '/images/clients/logo-horizontal-400x135-bg.png',
    '/images/clients/Mr_Bricolage_logo.png',
    '/images/clients/logo_praktis.png',
  ];

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 p-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className="w-full h-auto rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientSlider;

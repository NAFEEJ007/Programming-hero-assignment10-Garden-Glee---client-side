import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../App.css";

import slider1 from '../../assets/slider1.jpeg';
import slider2 from '../../assets/slider2.jpeg';
import slider3 from '../../assets/slider3.jpeg';
import slider4 from '../../assets/slider4.jpeg';
import slider5 from '../../assets/slider5.jpg';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const customArrowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(34,197,94,0.7)",
  borderRadius: "50%",
  width: "3rem",
  height: "3rem",
  color: "white",
  fontSize: "1.5rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
};

const Slider = () => {
  const slides = [
    {
      img: slider1,
      caption: "Welcome to Garden Glee 🌿 – Where Nature Meets Nurture"
    },
    {
      img: slider2,
      caption: "Explore Green Spaces & Hidden Garden Gems"
    },
    {
      img: slider3,
      caption: "Grow Your Dream Garden With Our Tips & Tools"
    },
    {
      img: slider4,
      caption: "Learn From Passionate Gardeners Around You"
    },
    {
      img: slider5,
      caption: "Share Your Own Gardening Wisdom With the World"
    }
  ];

  return (
    <div className="w-full">
      <Slide
          arrows={true}
        infinite={true}
        autoplay={true}
        duration={4000}
        pauseOnHover={true}
        transitionDuration={700}
        prevArrow={
          <div style={{ ...customArrowStyle, left: "1rem" }}>
            <FaChevronLeft />
          </div>
        }
        nextArrow={
          <div style={{ ...customArrowStyle, right: "1rem" }}>
            <FaChevronRight />
          </div>
        }
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="each-slide-effect"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="slide-caption">
              <h2>{slide.caption}</h2>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;

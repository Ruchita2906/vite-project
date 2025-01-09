import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/Ruchita_Chaudhari.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Ruchita Chaudhari",
        "I'm a Frontend developer",
        "MERN Stack developer ",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false, // Disables the blinking cursor
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container" id="home">
      <div className="home-section">
        <div className="content" data-aos="fade-up-right" data-aos-duration="1000">
          <div className="styled-box">
            <span ref={typedRef}></span> {/* Typed.js animation applied here */}
            <div className="button-container">
              <a
                href={pdf}
                download="Ruchita_Chaudhari.pdf"
                className="btn btn-outline-warning"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="image">
  <img src={`assets/${hero.imgSrc}`} alt="ruchi" />
</div>

      </div>
    </div>
  );
};

export default Home;

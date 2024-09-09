import React, { useState, useEffect } from 'react';
import NavBar from '../Pages/Components/NavBar'; // Ensure NavBar is correctly imported
import './home.css';
import github from '../assets/github.Pro.png';
import behance from '../assets/behance.Pro.png';
import linkedin from '../assets/linkedin.Pro.png';
import Logo from '../assets/Logo.png';
import { Button } from '@mui/material';

function Home() {
  

  useEffect(() => {
    consoleText(['UI UX Engineer', 'Full-Stack Dev', 'Undergraduate'], 'text', ['#2AD87F']);
  }, []);

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;
    const con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);

    const textInterval = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        setTimeout(() => {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && !waiting) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (!waiting) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    const underscoreInterval = setInterval(() => {
      if (visible) {
        con.className = 'console-underscore hidden';
        visible = false;
      } else {
        con.className = 'console-underscore';
        visible = true;
      }
    }, 400);
    
    return () => {
      clearInterval(textInterval);
      clearInterval(underscoreInterval);
    };
  };

  return (
    <div className={`homeFirst`}>
      <NavBar />
      <div className="home">
        
        <section className='section1'>
          <div className="firstScreen">
            <div className="firstLeft">
              <p className="firstLine">Hello Everyone</p>
              <h1 className="secLine">
                I’m Kavindu<br />Chathuranga
              </h1>
              <div className="console-container">
                <span id="text"></span>
                <div className="console-underscore" id="console">
                  &#95;
                </div>
              </div>
              <div className="socialMedia">
                <img src={github} alt="GitHub" />
                <img src={behance} alt="Behance" />
                <img src={linkedin} alt="LinkedIn" />
              </div>
              <div className="aboutMe">
                <Button
                  variant="outlined"
                  sx={{
                    width: { xs: '120%', sm: 'auto' },
                    height: { xs: '40px', sm: '60px' },
                    backgroundColor: '#1E242B',
                    borderRadius: '50px',
                    borderColor: '#2AD87F',
                    borderWidth: '2.5px',
                    fontSize: { xs: '12px', sm: '18px', md: '20px', lg: '22px' },
                    fontWeight: 600,
                    color: '#2AD87F',
                    padding: { xs: '10px 20px', sm: '5px 30px', md: '12px 40px' },
                    '&:hover': {
                      borderColor: '#1E242B',
                      backgroundColor: '#2AD87F',
                      color: '#1E242B',
                      borderWidth: '4.5px',
                    },
                  }}
                >
                  About Me
                </Button>
              </div>
              <div class="custom-shape-divider-bottom-1725901089">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                  </svg>
              </div>
            </div>
            <div className="firstRight">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
        </section>
        <section className='section2'>

        </section>
      </div>
      
    </div>
  );
}

export default Home;

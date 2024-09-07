import React, { useState, useEffect } from 'react';

import './home.css';
import github from '../assets/github.Pro.png';
import behance from '../assets/behance.Pro.png';
import linkedin from '../assets/linkedin.Pro.png';
import Logo from '../assets/Logo.png';
import { Button, Typography, IconButton, Box } from '@mui/material';
import { Toggle } from "./Components/DarkMood/Components/Toggle";

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

    setInterval(() => {
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

    setInterval(() => {
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
    <div className="homeFirst" >
      <div className="home">
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
                width: { xs: '120%', sm: 'auto' }, // Full width on small screens, fixed width on larger screens
                height: { xs: '40px', sm: '60px' }, // Slightly smaller height on small screens
                backgroundColor: '#1E242B',
                borderRadius: '50px',
                borderColor: '#2AD87F',
                borderWidth: '2.5px',
                fontSize: { xs: '12px', sm: '18px', md: '20px', lg: '22px' }, // Responsive font sizes
                fontWeight: 600,
                color: '#2AD87F',
                padding: { xs: '10px 20px', sm: '5px 30px', md: '12px 40px' }, // Responsive padding
                
                '&:hover': {
                  borderColor: '#1E242B',
                  backgroundColor: '#2AD87F', // Adjusted hover effect
                  color: '#1E242B',
                  borderWidth: '4.5px',
                },
              }}
            >
              About Me
          </Button>

          </div>
        </div>
        <div className="firstRight">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Home;

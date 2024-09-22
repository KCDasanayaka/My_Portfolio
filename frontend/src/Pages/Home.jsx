import React, { useState, useEffect } from 'react';// Ensure NavBar is correctly imported
import './home.css';
import github from '../assets/github.Pro.png';
import behance from '../assets/behance.Pro.png';
import linkedin from '../assets/linkedin.Pro.png';
import proimage1 from '../assets/Artboard 1.png';
import cvimg from '../assets/CVProfilePic.2.png';
import Logo from '../assets/Logo.png';
import figma from '../assets/tool.png';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import node from '../assets/pngegg (1).png';
import express from '../assets/pngegg (2).png';
import mongo from '../assets/pngegg (3).png';
import mySQL from '../assets/pngegg (4).png';
import php from '../assets/pngegg (5).png';
import js from '../assets/pngegg (6).png';
import ts from '../assets/pngegg (7).png';
import figma1 from '../assets/pngegg (8).png';
import react from '../assets/pngegg.png';
import pr from '../assets/pngegg (9).png';
import ae from '../assets/pngegg (10).png';
import ps from '../assets/pngegg (11).png';
import 'animate.css';
import { useNavigate } from 'react-router-dom';

// StyledButton component definition

const StyledButton = styled(Button)(({ active }) => ({
  width: '80%', // Use percentage for responsiveness
  maxWidth: '200px', // Limit maximum width
  height: 'auto', // Adjust height automatically based on content
  padding: '0.5em 1em', // Use em units for padding
  backgroundColor: '#ffffff',
  borderRadius: '50px',
  borderColor: '#000000',
  borderWidth: '2.5px',
  fontSize: '1.2rem', // Use relative units for font size
  fontWeight: 600,
  color: '#000000',
  transition: 'all 0.3s ease',
  ...(active && {
    borderColor: '#2AD87F',
    backgroundColor: '#1E242B',
    color: '#2AD87F',
    borderWidth: '4px', // Fixed value is fine for borderWidth
  }),

  // Responsive design adjustments
  '@media (max-width: 600px)': { // Mobile devices
    width: '100%', // Full width on small screens
    padding: '0.75em 1.5em', // Adjust padding
    fontSize: '0.875rem', // Adjust font size
    borderRadius: '30px',
  },

  '@media (min-width: 600px) and (max-width: 960px)': { // Tablet screens
    width: '90%', // Adjust width for medium screens
    padding: '0.5em 1em',
    fontSize: '1rem',
    borderRadius: '20px',
  },
}));

const ProjectCard = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);



  return (
    <div
      className={`mw-box1 ${isHovered ? 'active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={proimage1} alt='Project' className='proImage1' />
      <div className="mw-protop" style={{margin:'5% 0 0 0'}}>
        <div className="mw-fimgabox">
          <img src={figma} alt='Figma' className='mw-figma' />
        </div>
        <h3 style={{margin:'auto'}}>{category} Case Study</h3>
      </div>
      <p className='mw-detail'>Coding Enablement Platform</p>
      <div className="hover-box">
        <div className="hover-box-content" style={{padding:'15%'}}>
          <h3>Buildmate+</h3>
          <p style={{textAlign:'justify',fontSize:'13px'}}>Buildmate+ is an innovative construction enablement platform designed to streamline project management and connect clients with professionals and suppliers. </p>
          <div className="mw-hoverbtn" style={{display:'flex',justifyContent:'flex-end', gap:'10px'}}>
            <img src={github} alt="GitHub" style={{width:'35px'}}/>
            <img src={behance} alt="Behance" style={{width:'35px'}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [activeButton, setActiveButton] = useState('UI'); // Set default active button
  const [activeCategory, setActiveCategory] = useState('UI'); // Default category

  const handleClick = (button) => {
    setActiveButton(button === activeButton ? null : button);
    setActiveCategory(button);
  };

  const navigate = useNavigate();
  function behanceAcc() {
    navigate('behance.net/kavindudasanay');
  }

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
  }

  return (
    <div className="homeFirst">

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
                <img src={behance} onClick={behanceAcc} alt="Behance" />
                <img src={linkedin} alt="LinkedIn" />
              </div>
              <div className="aboutMe">
                <Button
                  variant="outlined"
                  sx={{
                    width: { xs: '120%', sm: 'auto' },
                    height: { xs: '40px', sm: '40px', md:'60px' },
                    backgroundColor: '#1E242B',
                    borderRadius: '50px',
                    borderColor: '#2AD87F',
                    borderWidth: '2.5px',
                    fontSize: { xs: '12px', sm: '18px', md: '20px', lg: '22px' },
                    fontWeight: 600,
                    color: '#2AD87F',
                    marginBottom:'5%',
                    padding: { xs: '10px 20px', sm: '5px 30px', md: '10px 40px' },
                    '&:hover': {
                      borderColor: '#1E242B',
                      backgroundColor: '#2AD87F',
                      color: '#1E242B',
                      borderWidth: '4 px',
                    },
                    '@media (max-width: 600px)': { // Mobile devices
                      width: '100%', // Full width on small screens
                      padding: '0.75em 1.5em', // Adjust padding
                      fontSize: '0.875rem', // Adjust font size
                      borderRadius: '30px',
                      marginTop:'-5%',
                      
                    },

                    '@media (min-width: 600px) and (max-width: 960px)': { // Tablet screens
                      width: '100%', // Adjust width for medium screens
                      padding: '0.75em 1.5em', // Adjust padding
                      fontSize: '1rem',
                      borderRadius: '30px',
                      marginTop:'-5%',
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
          <div class="custom-shape-divider-bottom-1726082737">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
        </section>
        <section className='section2'>
          <div className="myWorks">
            <h1 className='mw-head'>My WORKS</h1>
            <p className='mw-subhead'>Journey through my digital innovations and creative explorations</p>
            <div className="mw-btngroup">
              <StyledButton
                variant="outlined"
                active={activeButton === 'UI'}
                onClick={() => handleClick('UI')}
              >
                UI & UX
              </StyledButton>
              <StyledButton
                variant="outlined"
                active={activeButton === 'Coding'}
                onClick={() => handleClick('Coding')}
              >
                CODING
              </StyledButton>
              <StyledButton
                variant="outlined"
                active={activeButton === 'Designing'}
                onClick={() => handleClick('Designing')}
              >
                Designing
              </StyledButton>
            </div>
            <div className="mw-projects">
              {activeCategory === 'UI' && (
                <div className="mw-projectcard">
                  {[...Array(3)].map((_, i) => (
                    <ProjectCard key={i} category='UI' />
                  ))}
                </div>
              )}

              {activeCategory === 'Coding' && (
                <div className="mw-projectcard">
                  {[...Array(3)].map((_, i) => (
                    <ProjectCard key={i} category='Coding' />
                  ))}
                </div>
              )}

              {activeCategory === 'Designing' && (
                <div className="mw-projectcard">
                  {[...Array(3)].map((_, i) => (
                    <ProjectCard key={i} category='Designing' />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        <section className='section3'>
          <div class="custom-shape-divider-top-1726385316">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
              </svg>
          </div>
          <div className="about">
            <div className="aboutleft">
              <img src={cvimg} alt=' ' width={'80%'}/>
            </div>
            <div className="aboutright">
              <div className="abouthead">
                <h1 className='ab-head'>About Me</h1>
                <p className='ab-subhead'>Hello! I'm Kavindu Chathuranga, a third-year Computing and Information Systems student at Sabaragamuwa University. Passionate about full-stack development and UI/UX engineering, I strive to create impactful and intuitive digital experiences. Eager to bring my skills to the tech industry, I thrive on innovation and collaboration.</p>
                <Button
                  variant="outlined"
                  sx={{
                    width: { xs: 'auto', sm: 'auto' },
                    height: { xs: '40px', sm: '40px', md:'60px' },
                    backgroundColor: '#1E242B',
                    borderRadius: '50px',
                    borderColor: '#2AD87F',
                    borderWidth: '2.5px',
                    fontSize: { xs: '12px', sm: '18px', md: '20px', lg: '22px' },
                    fontWeight: 600,
                    color: '#2AD87F',
                    marginBottom:'5%',
                    padding: { xs: '10px 20px', sm: '5px 30px', md: '10px 40px' },
                    '&:hover': {
                      borderColor: '#1E242B',
                      backgroundColor: '#2AD87F',
                      color: '#1E242B',
                      borderWidth: '4 px',
                    },
                    '@media (max-width: 600px)': { // Mobile devices
                      padding: '0.75em 1.5em', // Adjust padding
                      fontSize: '0.875rem', // Adjust font size
                      borderRadius: '30px',
                      marginTop:'-5%',
                      
                    },

                    '@media (min-width: 600px) and (max-width: 960px)': { // Tablet screens
                      padding: '0.75em 1.5em', // Adjust padding
                      fontSize: '1rem',
                      borderRadius: '30px',
                      marginTop:'-5%',
                    },
                  }}
                >
                  Download my cV
                </Button>
              
              </div>
            </div>
          </div>
        </section>
        <section className='section4'>
          <div className="tech">
              <div className="techup">
                <img src={react} alt=' '/>
                <img src={node} alt=''/>
                <img src={express} alt=' '/>
                <img src={mongo} alt=' '/>
                <img src={php} alt=' '/>
                <img src={mySQL} alt=' '/>
              </div>
              <div className="techup">
                <img src={js} alt=' '/>
                <img src={ts} alt=''/>
                <img src={figma1} alt=' '/>
                <img src={ps} alt=' '/>
                <img src={pr} alt=' '/>
                <img src={ae} alt=' '/>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

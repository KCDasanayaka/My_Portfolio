import React, { useState, useEffect } from 'react';// Ensure NavBar is correctly imported
import './home.css';
import github from '../assets/github.Pro.png';
import behance from '../assets/behance.Pro.png';
import linkedin from '../assets/linkedin.Pro.png';
import proimage1 from '../assets/Artboard 1.png';
import cvimg from '../assets/CVProfilePic.2.png';
import Logo from '../assets/Logo.png';
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
import Tourism from '../assets/Tourism.png';
import PortFolio from '../assets/PortFolio1.png';
import BuildMate from '../assets/BuildMate.png';
import TransportMng from '../assets/TransportMng.png';
import Pharma from '../assets/Pharma.png';
import ChatWindow from '../assets/ChatWindowMockupView.png';
import HostelMngMockup from '../assets/HostelMngMockup.png';
import code from '../assets/code.png';
import figma from '../assets/figma.png';
import figma2 from '../assets/Figma.2.png';
import link from '../assets/Link.1.png';
import mycv from '../assets/UI_20APC4645_Kavindu Chathuranga.pdf';
import ttcover from '../assets/Tabel-Tennis.png';
import vEditing from '../assets/vEditing.png'
import magazine from '../assets/Magazine.png'
import infobash from '../assets/Infobash.png'
import pini1 from '../assets/Pini-1.png'
import yt from '../assets/Youtube.png'
import fb from '../assets/Facebook.png'
import myReminder from '../assets/MyReminderCover.png'
import 'animate.css';
import { Link, useNavigate } from 'react-router-dom';

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
    fontSize: '0.7rem', // Adjust font size
    borderRadius: '30px',
  },

  '@media (min-width: 600px) and (max-width: 960px)': { // Tablet screens
    width: '90%', // Adjust width for medium screens
    padding: '0.5em 1em',
    fontSize: '1rem',
    borderRadius: '20px',
  },
}));

const projectData = {
  
  UI: [
    {
      id: 1,
      category: 'UI',
      title: 'UI',
      Subtitle: 'UI Case Study',
      SubDescription:'Pizza Delivery Mobile App',
      description: 'Buildmate+ is an innovative construction enablement platform designed to streamline project management.',
      image: proimage1,
      titleImg: figma,
      githubLink: figma2,
      Link1: 'https://www.figma.com/proto/ccaAO6hGU5cMsYwYzZBnSd/Untitled?page-id=3%3A4&node-id=3-8&starting-point-node-id=35%3A104&t=DmEB4vwfqbEqjESN-1',
      Link2: 'https://www.behance.net/gallery/206162151/Pizza-ordering-Mobile-App-Design-Figma-Template',
      behanceLink: behance
    },
    {
      id: 2,
      category: 'UI',
      title: 'DesignHub',
      Subtitle: 'UI Case Study',
      SubDescription:'Tourism Promotion Platform',
      description: 'DesignHub is a collaborative platform that connects designers with clients seeking creative solutions.',
      image: Tourism,
      titleImg: figma,
      githubLink: figma2,
      Link1: 'https://www.figma.com/proto/xFSKmdnR8GDVw0an7OkTNv/Pixel-Pioneers?page-id=4%3A2&node-id=129-153&node-type=frame&viewport=495%2C239%2C0.1&t=QwkX2xLQ3qASQn6q-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=129%3A153',
      Link2: 'https://github.com/KCDasanayaka',
      behanceLink: behance
    },
    {
      id: 3,
      category: 'UI',
      title: 'DesignHub',
      Subtitle: 'UI Design',
      SubDescription:'Public Transport Management Platform',
      description: 'DesignHub is a collaborative platform that connects designers with clients seeking creative solutions.',
      image: TransportMng,
      titleImg: figma,
      githubLink: figma2,
      Link1: 'https://www.figma.com/proto/Xb28kCx0SSeSD6hPbKq5HM/Untitled?page-id=0%3A1&node-id=141-23&node-type=frame&viewport=3268%2C-3669%2C0.89&t=BmkFCWNtHnhZygIe-1&scaling=scale-down&content-scaling=fixed',
      Link2: 'https://github.com/KCDasanayaka',
      behanceLink: behance
    },
    {
      id: 4,
      category: 'UI',
      title: 'DesignHub',
      Subtitle: 'UI Design',
      SubDescription:'Personal Portfolio Design',
      description: 'DesignHub is a collaborative platform that connects designers with clients seeking creative solutions.',
      image: PortFolio,
      titleImg: figma,
      githubLink: figma2,
      Link1: 'https://www.figma.com/proto/K5NtqALbLhOTDnqUL1aCwY/Untitled?page-id=0%3A1&node-id=54-61&node-type=frame&viewport=851%2C402%2C0.07&t=ya8GzjEhWpicWa48-1&scaling=scale-down&content-scaling=fixed',
      Link2: 'https://www.behance.net/gallery/208481691/Personal-Portfolio-Page',
      behanceLink: behance
    },
    {
      id: 5,
      category: 'UI',
      title: 'DesignHub',
      Subtitle: 'UI Case Study',
      SubDescription:'Phramaceutical E-Commers Web Platform',
      description: 'DesignHub is a collaborative platform that connects designers with clients seeking creative solutions.',
      image: Pharma,
      titleImg: figma,
      githubLink: figma2,
      Link1: 'https://www.figma.com/proto/dgkexxjmRaHq62ammRQvd4/IS3109-Group-01-Chemical-Industry?page-id=201%3A62&node-id=652-1755&starting-point-node-id=652%3A1755&t=FRFcZf5nPr4OBIg3-1',
      Link2: 'https://github.com/KCDasanayaka',
      behanceLink: behance
    },
    {
      id: 6,
      category: 'UI',
      title: 'DesignHub',
      Subtitle: 'UI Design',
      SubDescription:'Construction Enablement Platform',
      description: 'DesignHub is a collaborative platform that connects designers with clients seeking creative solutions.',
      image: BuildMate,
      titleImg: figma,
      githubLink: figma2,
      Link1: 'https://www.figma.com/proto/YBUjUiWHqvipnZHdMsFweW/BuildMate%2B?page-id=75%3A17&node-id=88-112&node-type=frame&viewport=1147%2C656%2C0.24&t=bbNTcTLPR8fH06oR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=88%3A112',
      Link2: 'https://github.com/KCDasanayaka',
      behanceLink: behance
    },
    // Add more UI projects here
  ],
  Coding: [
    {
      id: 1,
      category: 'Coding',
      title: 'CodeMaster',
      Subtitle: 'React | Firebase',
      SubDescription:'Real-time Chat Application',
      description: 'CodeMaster is a coding platform to enhance developers’ skills with hands-on projects and challenges.',
      image: ChatWindow,
      titleImg: code,
      githubLink: github,
      behanceLink: link
    },
    {
      id: 2,
      category: 'Coding',
      title: 'DevConnector',
      Subtitle: 'MERN | Tailwind',
      SubDescription:'Construction Enablement Platform',
      description: 'DevConnector allows developers to connect, share ideas, and collaborate on open-source projects.',
      image: BuildMate,
      titleImg: code,
      githubLink: github,
      behanceLink: link
    },
    {
      id: 3,
      category: 'Coding',
      title: 'DevConnector',
      Subtitle: 'React | Laravel | MySQL',
      SubDescription:'Hostel Management System',
      description: 'DevConnector allows developers to connect, share ideas, and collaborate on open-source projects.',
      image: HostelMngMockup,
      titleImg: code,
      githubLink: github,
      behanceLink: link
    },
    {
      id: 4,
      category: 'Coding',
      title: 'DevConnector',
      Subtitle: 'React | Firebase | Tailwind',
      SubDescription:'Public Transport Management Platform',
      description: 'DevConnector allows developers to connect, share ideas, and collaborate on open-source projects.',
      image: TransportMng,
      titleImg: code,
      githubLink: github,
      behanceLink: link
    },
    {
      id: 5,
      category: 'Coding',
      title: 'DevConnector',
      Subtitle: 'React | MaterialUI',
      SubDescription:'Personal Portfolio Design',
      description: 'DevConnector allows developers to connect, share ideas, and collaborate on open-source projects.',
      image: PortFolio,
      titleImg: code,
      githubLink: github,
      behanceLink: link
    },
    {
      id: 6,
      category: 'Coding',
      title: 'DevConnector',
      Subtitle: 'React Native | Bootstrap',
      SubDescription:'MyReminder Mobile Application',
      description: 'DevConnector allows developers to connect, share ideas, and collaborate on open-source projects.',
      image: myReminder,
      titleImg: code,
      githubLink: github,
      behanceLink: link
    },
    // Add more Coding projects here
  ],
  Designing: [
    {
      id: 1,
      category: 'Designing',
      title: 'BrandWave',
      Subtitle: 'Intro Video',
      SubDescription:'South Asian Youth Table Tennis Championship 2024',
      description: 'BrandWave is a branding platform that provides tools for creating stunning visual identities.',
      image: ttcover,
      titleImg: vEditing,
      githubLink: fb,
      Link1: 'https://www.figma.com/proto/ccaAO6hGU5cMsYwYzZBnSd/Untitled?page-id=3%3A4&node-id=3-8&starting-point-node-id=35%3A104&t=DmEB4vwfqbEqjESN-1',
      Link2: 'https://youtu.be/Od5MwNzt8MQ',
      behanceLink: yt
    },
    {
      id: 2,
      category: 'Designing',
      title: 'CreativeStudio',
      Subtitle: 'Magazine Reveal Video',
      SubDescription:'ComSpective Volume 4 - Faculty of Computing',
      description: 'CreativeStudio is a design toolkit for freelance designers to create custom design solutions.',
      image: magazine,
      titleImg: vEditing,
      githubLink: fb,
      behanceLink: yt
    },
    {
      id: 3,
      category: 'Designing',
      title: 'CreativeStudio',
      Subtitle: 'Intro Video',
      SubDescription:'Annual Cricket Trounament-Faculty of Computing',
      description: 'CreativeStudio is a design toolkit for freelance designers to create custom design solutions.',
      image: infobash,
      titleImg: vEditing,
      githubLink: fb,
      behanceLink: yt
    },
    {
      id: 4,
      category: 'Designing',
      title: 'CreativeStudio',
      Subtitle: 'Intro Video',
      SubDescription:'"පිරිහිඹිනි දියවර-2024" Main Cultural Events Series',
      description: 'CreativeStudio is a design toolkit for freelance designers to create custom design solutions.',
      image: pini1,
      titleImg: vEditing,
      githubLink: fb,
      Link1: 'https://www.figma.com/proto/ccaAO6hGU5cMsYwYzZBnSd/Untitled?page-id=3%3A4&node-id=3-8&starting-point-node-id=35%3A104&t=DmEB4vwfqbEqjESN-1',
      Link2: 'https://youtu.be/86xLEf4e_l0',
      
      behanceLink: yt
    },
    // Add more Designing projects here
  ]
};

// Modify ProjectCard to accept props
const ProjectCard = ({ title, description, image, githubLink, behanceLink,  titleImg, Subtitle, SubDescription, Link1, Link2 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const [hoveredGitHub, setHoveredGitHub] = useState(false);
  const [hoveredBehance, setHoveredBehance] = useState(false);

  return (
    <div
      className={`mw-box1 ${isHovered ? 'active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className='proImage1' />
      <div className="mw-protop" style={{ margin: '5% 0 0 0' }}>
        <img src={titleImg} alt=' '/>
        <h3 style={{ margin: 'auto' }}>{Subtitle}</h3>
      </div>
      <p className='mw-detail' style={{marginTop:'3%'}}>{SubDescription}</p>
      <div className="hover-box">
        <div className="hover-box-content" style={{ padding: '15%' }}>
          <h3 style={{fontSize:'1rem'}}>{SubDescription}</h3>
          <h3 style={{ marginTop: '5%' }}>Live Demos</h3>
          <div className="mw-hoverbtn" style={{ display: 'flex', justifyContent: 'center', gap: '30px' ,alignItems:'center',marginTop:'5%'}}>
          <Link to={Link1} 
           target="_blank"
           rel="noopener noreferrer"
          >
            <img 
              src={githubLink} 
              alt="GitHub" 
              style={{
                width: '50px',
                cursor: 'pointer',
                borderRadius: '50%',
                transform: hoveredGitHub ? 'scale(1.1)' : 'scale(1)',  // Hover effect for GitHub
                boxShadow: hoveredGitHub ? '0 0px 10px rgba(0, 0, 0, 0.5)' : 'none',
                transition: 'transform 0.3s ease',
              }} 
              onMouseEnter={() => setHoveredGitHub(true)}  // Trigger GitHub hover effect
              onMouseLeave={() => setHoveredGitHub(false)} // Remove GitHub hover effect
            />
          </Link>

          <Link to={Link2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={behanceLink} 
              alt="Behance" 
              style={{
                width: '50px',
                cursor: 'pointer',
                borderRadius: '50%',
                transform: hoveredBehance ? 'scale(1.1)' : 'scale(1)',  // Hover effect for Behance
                boxShadow: hoveredBehance ? '0 0px 10px rgba(0, 0, 0, 0.5)' : 'none',
                transition: 'transform 0.3s ease',
              }} 
              onMouseEnter={() => setHoveredBehance(true)}  // Trigger Behance hover effect
              onMouseLeave={() => setHoveredBehance(false)} // Remove Behance hover effect
            />
          </Link>
            
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

  function behanceAcc() {
    window.location.href = 'https://www.behance.net/kavindudasanay';
  }

  function gitAcc() {
    window.location.href = 'https://github.com/KCDasanayaka';
  }

  function linkedinAcc() {
    window.location.href = 'https://www.linkedin.com/in/kavindu-dasanayaka-6a6735285';
  }

  const aboutSection = () => {
    const targetSection = document.getElementById('aboutMe');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }
  };
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
              <p className="firstLine">hello</p>
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
                <img src={github} alt="GitHub" onClick={gitAcc} className='sociallogo'/>
                <img src={behance} onClick={behanceAcc} alt="Behance" className='sociallogo'/>
                <img src={linkedin} alt="LinkedIn" onClick={linkedinAcc} className='sociallogo'/>
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
                    animation: 'heartbeat 1.5s ease-in-out infinite',  // Add this line
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
                 onClick={aboutSection}>
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
        <section className='section2'id= 'projects'>
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
                  {projectData.UI.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      Subtitle={project.Subtitle}
                      SubDescription={project.SubDescription}
                      description={project.description}
                      image={project.image}
                      titleImg={project.titleImg}
                      githubLink={project.githubLink}
                      behanceLink={project.behanceLink}
                      Link1={project.Link1}
                      Link2={project.Link2}
                    />
                  ))}
                </div>
              )}

              {activeCategory === 'Coding' && (
                <div className="mw-projectcard">
                  {projectData.Coding.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      Subtitle={project.Subtitle}
                      SubDescription={project.SubDescription}
                      description={project.description}
                      image={project.image}
                      titleImg={project.titleImg}
                      githubLink={project.githubLink}
                      behanceLink={project.behanceLink}
                      Link1={project.Link1}
                      Link2={project.Link2}
                    />
                  ))}
                </div>
              )}

              {activeCategory === 'Designing' && (
                <div className="mw-projectcard">
                  {projectData.Designing.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      Subtitle={project.Subtitle}
                      SubDescription={project.SubDescription}
                      description={project.description}
                      image={project.image}
                      titleImg={project.titleImg}
                      githubLink={project.githubLink}
                      behanceLink={project.behanceLink}
                      Link1={project.Link1}
                      Link2={project.Link2}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        <section className='section3' id='aboutMe'>
          <div class="custom-shape-divider-top-1726385316">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
              </svg>
          </div>
          <div className="about" >
            <div className="aboutleft">
              <img src={cvimg} alt=' ' width={'80%'}/>
            </div>
            <div className="aboutright">
              <div className="abouthead">
                <h1 className='ab-head'>About Me</h1>
                <p className='ab-subhead'>Hello! I'm Kavindu Chathuranga, a third-year Computing and Information Systems student at Sabaragamuwa University. Passionate about full-stack development and UI/UX engineering, I strive to create impactful and intuitive digital experiences. Eager to bring my skills to the tech industry, I thrive on innovation and collaboration.</p>
                
                <a href={mycv} download="KavinduChathuranga_CV">
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
                      animation: 'heartbeat 2.5s ease-in-out infinite', 
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
                </a>
              
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

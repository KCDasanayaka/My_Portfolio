// Blog.jsx
import React from 'react';
import './blog.css';
import blogimg1 from '../assets/Blog1.png';
import blogimg2 from '../assets/Blog2.png';
import figma from '../assets/tool.png';

const Blog = () => {
  return (
    <div className='blog'>
      <div class="custom-shape-divider-top-1726775091">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>
      <section className='blogSection'>
          <div className="bgWorks">
            <h1 className='bg-head'>My BLOGS</h1>
            <p className='bg-subhead'>Read my latest articles</p>
            <div className="bgbox">
            <div className='bg-box1'>
                <img src={blogimg1} alt='Project' className='bgImage1' />
                <div className="mw-protop" style={{margin:'5% 0 0 0'}}>
                  <div className="mw-fimgabox">
                    <img src={figma} alt='Figma' className='mw-figma' />
                  </div>
                  <h3 style={{margin:'auto'}}> Case Study</h3>
                </div>
                <p className='mw-detail'>Coding Enablement Platform</p>
                
              </div>
              <div className='bg-box1'>
                <img src={blogimg2} alt='Project' className='bgImage1' />
                <div className="mw-protop" style={{margin:'5% 0 0 0'}}>
                  <div className="mw-fimgabox">
                    <img src={figma} alt='Figma' className='mw-figma' />
                  </div>
                  <h3 style={{margin:'auto'}}> Case Study</h3>
                </div>
                <p className='mw-detail'>Coding Enablement Platform</p>
                
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Blog;  // Make sure it's a default export

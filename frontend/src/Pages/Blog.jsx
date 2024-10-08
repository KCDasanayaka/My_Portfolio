// Blog.jsx
import React from 'react';
import './blog.css';
import blogimg1 from '../assets/Blog1.png';
import blogimg2 from '../assets/Blog2.png';
import figma from '../assets/tool.png';
import blog3 from '../assets/blog-3.png'
import blog from '../assets/blog.3.png';
import { Link } from 'react-router-dom';

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
              <Link
                to={"https://kavindu.hashnode.dev/the-60-30-10-rule-in-ui-design"}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link" // Add className here
              >
                <img src={blog3} alt='Project' className='bgImage1' />
                <div className='bg-title-container'>
                  <div className="bg-title" style={{ margin: '0', }}>
                    <img src={blog} alt='Figma' className='bg-figma' />
                    <div className="bg-protop">
                      <h3 className='bg-topic1' style={{ margin: '0'}}>UI/UX Design Rules</h3>
                      <p className='bg-subtopic' style={{ margin: '0' }}>
                        60-30-10 Rule
                      </p>
                    </div>
                    
                  </div>
                </div>
                
              </Link>
            </div>
            <div className='bg-box1'>
              <Link
                to={"https://kavindu.hashnode.dev/how-to-implement-dark-mode-and-light-mode-in-react"}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link" // Add className here
              >
                <img src={blogimg1} alt='Project' className='bgImage1' />
                <div className='bg-title-container'>
                  <div className="bg-title" style={{ margin: '0', }}>
                    <img src={blog} alt='Figma' className='bg-figma' />
                    <div className="bg-protop">
                      <h3 className='bg-topic1' style={{ margin: '0'}}>React UI/UX Essentials</h3>
                      <p className='bg-subtopic' style={{ margin: '0' }}>
                        Creating Dark mode and Light mode in React
                      </p>
                    </div>
                    
                  </div>
                </div>
                
              </Link>
            </div>
            <div className='bg-box1'>
              <Link
                to={"https://kavindu.hashnode.dev/how-to-implement-dark-mode-and-light-mode-in-react"}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link" // Add className here
              >
                <img src={blogimg2} alt='Project' className='bgImage1' />
                <div className='bg-title-container'>
                  <div className="bg-title" style={{ margin: '0', }}><img src={blog} alt='Figma' className='bg-figma' />
                    <div className="bg-protop">
                      
                      <h3 className='bg-topic1' style={{ margin: '0'}}>Modern UI/UX Design</h3>
                      <p className='bg-subtopic' style={{ margin: '0' }}>
                      How Figma elevates UI/UX in modern web
                      </p>
                    </div>
                    
                  </div>
                </div>
                
              </Link>
            </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Blog;  // Make sure it's a default export

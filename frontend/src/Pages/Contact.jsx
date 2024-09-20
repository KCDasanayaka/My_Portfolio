import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import './contact.css';
import waveImg from '../assets/laptop wave.png';

function ContactUs() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending the data to the backend or displaying a success message
    console.log('Form Data Submitted:', formData);
    setFormData({ email: '', message: '' }); // Reset the form
  };

  return (
    <div className="contact">
      <div className="contact-box">
        <div className="bgWorks">
              <h1 className='bg-head' style={{textTransform:'uppercase'}}>Say Hi!</h1>
              <p className='bg-subhead'>Let’s Build Something Amazing Together!</p>
        </div>
        <div className="cnt-flex">
          <img src={waveImg} alt=' ' className='cnt-wave'/>
          <div className="cnt-right">
            <p className='cnt-para'>Whether you have a creative project in mind or just want to chat, I’m always open to new opportunities. Collaboration is where the magic happens, and I’d love to be part of your next idea.</p>
                <Container maxWidth="sm">
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      mt: 4,
                      p: 4,
                      color:'white'
                    }}
                  >
                    <TextField
                      required
                      label="Email"
                      variant="outlined"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      label="Message"
                      variant="outlined"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                    />
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Box>
                </Container>
          </div>
        </div>
        
      </div>
        
    </div>
    
  );
}

export default ContactUs;

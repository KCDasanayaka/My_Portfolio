import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Container } from '@mui/material';
import './contact.css';
import waveImg from '../assets/laptop wave.png';
import emailjs from '@emailjs/browser';
import { styled } from '@mui/material/styles';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [buttonState, setButtonState] = useState('');
  const form = useRef(); // Ref for the form

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using emailjs
    emailjs.sendForm('service_3zho2u9', 'template_1gktkda', form.current, 'g6yVNZes_EI4pzyYl')
      .then(() => {
        console.log('SUCCESS!');
        setFormData({ name: '', email: '', message: '' }); // Reset form data
        setButtonState('validate'); // Show success state
        setTimeout(() => setButtonState(''), 1250); // Reset button state after delay
      }, (error) => {
        console.error('FAILED...', error); // Log error object for better debugging
      });
  };

  return (
    <div className="contact">
      <div className="contact-box">
        <div className="bgWorks">
          <h1 className="bg-head" style={{ textTransform: 'uppercase' }}>Say Hi!</h1>
          <p className="bg-subhead">Let’s Build Something Amazing Together!</p>
        </div>
        <div className="cnt-flex">
          <img src={waveImg} alt=" " className="cnt-wave" />
          <div className="cnt-right">
            <p className="cnt-para">Whether you have a creative project in mind or just want to chat, I’m always open to new opportunities. Collaboration is where the magic happens, and I’d love to be part of your next idea.</p>

            <h1 className="ctn-head">Reach Out!</h1>
            <p className="ctn-subhead">Shoot me a message, and let’s make your vision a reality!</p>

            {/* Ref applied directly to the form element */}
            <Container maxWidth="sm">
              <Box
                component="form"
                ref={form} // Attach form ref here
                onSubmit={handleSubmit} // Handle form submission
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  p: 4,
                  color: 'white',
                }}
              >
                {/* Name Input */}
                <TextField
                  required
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                  }}
                />

                {/* Email Input */}
                <TextField
                  required
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                  }}
                />

                {/* Message Input */}
                <TextField
                  required
                  label="Message"
                  variant="outlined"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                  }}
                />

                {/* Submit Button */}
                <div className="container">
                  
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={buttonState} // Dynamic button state for animations
                    sx={{
                      width: { xs: '120%', sm: 'auto' },
                      height: { xs: '40px', sm: '40px', md: '60px' },
                      backgroundColor: '#1E242B',
                      borderRadius: '10px',
                      borderColor: '#2AD87F',
                      borderWidth: '2.5px',
                      fontSize: { xs: '12px', sm: '18px', md: '20px', lg: '22px' },
                      fontWeight: 600,
                      color: '#2AD87F',
                      marginBottom: '5%',
                      padding: { xs: '6px 20px', sm: '5px 30px', md: '6px 40px' },
                      '&:hover': {
                        borderColor: '#ffffff',
                        backgroundColor: '#ffffff',
                        color: '#2AD87F',
                        borderWidth: '4px',
                      },
                      '@media (max-width: 600px)': { // Mobile devices
                        width: '100%', // Full width on small screens
                        padding: '0.75em 1.5em', // Adjust padding
                        fontSize: '0.875rem', // Adjust font size
                        borderRadius: '30px',
                        marginTop: '-5%',
                      },
                      '@media (min-width: 600px) and (max-width: 960px)': { // Tablet screens
                        width: '100%', // Adjust width for medium screens
                        padding: '0.75em 1.5em', // Adjust padding
                        fontSize: '1rem',
                        borderRadius: '30px',
                        marginTop: '-5%',
                      },
                    }}
                  >
                    Submit
                  </Button>

                  
                </div>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

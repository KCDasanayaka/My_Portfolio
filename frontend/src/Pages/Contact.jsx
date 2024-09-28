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
                      width: { xs: '120%', sm: '100%' },
                      height: { xs: '40px', sm: '40px', md: '60px' },
                      backgroundColor: '#1E242B',
                      borderRadius: '10px',
                      borderColor: '#2AD87F',
                      borderWidth: '2.5px',
                      fontSize: { xs: '12px', sm: '18px', md: '20px', lg: '20px' },
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
                      },
                      '@media (min-width: 600px) and (max-width: 960px)': { // Tablet screens
                        width: '100%', // Adjust width for medium screens
                        padding: '0.75em 1.5em', // Adjust padding
                        fontSize: '1rem',
                      },
                    }}
                  >
                    Submit
                  </Button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="custom-svg"  viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                      </svg>
                  
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

import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Container } from '@mui/material';
import './contact.css';
import waveImg from '../assets/laptop wave.png';
import emailjs from '@emailjs/browser';

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

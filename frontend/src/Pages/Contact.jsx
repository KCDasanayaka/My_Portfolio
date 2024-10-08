import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Container } from '@mui/material';
import './contact.css';
import waveImg from '../assets/laptop wave.png';
import emailjs from '@emailjs/browser';
import { styled } from '@mui/material/styles';

function ContactUs() {

  function wzpAcc() {
    window.location.href = 'https://wa.me/qr/PTUKIV2CRANDP1';
  }


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
                  gap: 1,
                  p: { xs: [1, 8], sm: [1, 2] },
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cnt-send" onClick={wzpAcc} viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                      </svg>
                  </Button>
                  <p>Or</p>
                  <div className="social-contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="custom-svg"  viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="custom-svg" viewBox="0 0 16 16">
                        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="custom-svg"  viewBox="0 0 16 16">
                        <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="custom-svg"  viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="custom-svg"  viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                      </svg>
                  </div>
                  
                  
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

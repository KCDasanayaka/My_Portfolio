import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Toggle } from './DarkMood/Components/Toggle'; 
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: 'Projects', path: 'projects' },     
  { name: 'Blogs', path: '/blog' },    
  { name: 'Say Hi!', path: '/contact' } 
];



function ResponsiveAppBar({ isDarkMode, toggleTheme }) {
  const navigate= useNavigate();
  function handletohome(){
    navigate('../../')
  }
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
        position="fixed"
        sx={{
          top: 0,
          backgroundColor: isDarkMode ? '#121212' : '#ffffff',
          color: isDarkMode ? '#fff' : '#000',
          padding: { xs: '0px', md: '0 50px' },
          gap: '20px',
          zIndex: 1200, 
          boxShadow:'none',
          fontWeight:600,
        }}
      >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            onClick={handletohome}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' }, 
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            Kavindu.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end',    minWidth: '100px' }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name} 
                  onClick={handleCloseNavMenu}
                  sx={{ ml: 5 }}  // Add margin-left
                >
                  <Link 
                    to={page.path} 
                    style={{ textDecoration: 'none', color: 'inherit', fontWeight: '600' }}  // Style Link element
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}

            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: isDarkMode ? 'white' : 'black',
                  fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '16px' },  // Increase font size based on screen size
                  fontWeight: 700,
                  display: 'block',
                  position: 'relative',
                  '&:hover': {
                    color: '#2AD87F',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '4px',
                    left: '0',
                    bottom: '0',
                    backgroundColor: '#2AD87F',
                    transition: 'width 0.3s ease-in-out',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                <Link to={page.path} style={{ textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 2 }}>
            <Toggle isChecked={isDarkMode} handleChange={toggleTheme} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

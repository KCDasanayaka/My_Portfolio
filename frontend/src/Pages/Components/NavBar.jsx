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
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { Toggle } from './DarkMood/Components/Toggle';  // Import your custom Toggle component

const pages = [
  { name: 'Projects', path: '/' },      // Example project page, you can adjust it as needed
  { name: 'Blogs', path: '/blog' },     // Link to Blog page
  { name: 'Say Hi!', path: '/contact' } // Link to Contact page
];

function ResponsiveAppBar({ isDarkMode, toggleTheme }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="relative" 
      sx={{ 
        backgroundColor: isDarkMode ? '#121212' : '#ffffff', // Toggle background based on dark mode prop
        color: isDarkMode ? '#fff' : '#000', // Toggle text color
        padding: { xs: '0px', md: '0 50px' }, // Padding is 0 on mobile (xs), 5px 50px on medium (md) and larger
        gap:'20px'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
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

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  {/* Use Link inside MenuItem */}
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: isDarkMode ? 'white' : 'black', display: 'block' }}
              >
                {/* Use Link inside Button */}
                <Link to={page.path} style={{ textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Dark Mode Toggle */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 2 }}>
            {/* Use your custom Toggle component */}
            <Toggle isChecked={isDarkMode} handleChange={toggleTheme} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

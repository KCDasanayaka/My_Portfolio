import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home';
import NavBar from './Pages/Components/NavBar';
import { Toggle } from './Pages/Components/DarkMood/Components/Toggle';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                  <Toggle isChecked={isDarkMode} handleChange={toggleTheme} />
                  
                </div>
                
                <Home />
              </>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home';
import ResponsiveAppBar from './Pages/Components/NavBar';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
      <Router>
        {/* Pass isDarkMode and toggleTheme to ResponsiveAppBar */}
        <ResponsiveAppBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
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

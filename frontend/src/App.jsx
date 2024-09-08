import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home';
import { Toggle } from './Pages/Components/DarkMood/Components/Toggle';

import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Toggle
                isChecked={isDark}
                handleChange={handleToggle}
              />
              <Home />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

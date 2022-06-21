import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Welcome from './pages/welcome';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <Router>
      <Welcome />
      <About />
      <Experience />
    </Router>
  );
}

export default App;

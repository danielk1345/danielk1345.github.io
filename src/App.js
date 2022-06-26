import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Welcome from './pages/welcome';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Welcome />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import About from './pages/About';
import NotFound from './pages/NotFound';

/**
 * Render the main App component with different routes and components.
 *
 * @return {JSX.Element} The rendered main component.
 */
const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

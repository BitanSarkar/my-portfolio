// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <motion.div initial={{ y: -250 }} animate={{ y: 0 }} transition={{ delay: 0.2 }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/about">About</Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;

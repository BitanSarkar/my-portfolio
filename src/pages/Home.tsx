import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Welcome to My Portfolio
      </motion.h1>
      <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
        I'm a React developer...
      </motion.p>
    </Container>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
`;

const NaughtyBoy = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-image: url('/path-to-your-naughty-boy-image.png'); // Add your image path here
  background-size: cover;
  margin-bottom: 20px;
`;

const Message = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const HomeLink = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #2980b9;
  }
`;

const NotFound: React.FC = () => {
  return (
    <Container>
      <NaughtyBoy
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      />
      <Message>404 - Naughty Boy!</Message>
      <p>The page you are looking for was not found.</p>
      <HomeLink to="/">Go Home</HomeLink>
    </Container>
  );
};

export default NotFound;

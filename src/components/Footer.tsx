import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  padding: 1rem;
  background: #2c3e50;
  color: white;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <Foot>
      <p>&copy; 2024 My Portfolio</p>
    </Foot>
  );
};

export default Footer;

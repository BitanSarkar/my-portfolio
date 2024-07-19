import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const About: React.FC = () => {
  return (
    <Container>
      <h1>About Me</h1>
      <p>Here is some information about me...</p>
    </Container>
  );
};

export default About;

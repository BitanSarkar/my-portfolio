import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Projects: React.FC = () => {
  return (
    <Container>
      <h1>Projects</h1>
      <p>Here are some of my projects...</p>
    </Container>
  );
};

export default Projects;

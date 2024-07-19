import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Education: React.FC = () => {
  return (
    <Container>
      <h1>Education</h1>
      <p>Here is my educational background...</p>
    </Container>
  );
};

export default Education;

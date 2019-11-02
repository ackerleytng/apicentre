import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Home = () => (
  <Container>
    <Jumbotron style={{marginTop: '50px'}}>
      <h1>Not Found</h1>
      <p>
        This api can't be found.
      </p>
      <p>
        Browse the documentation above for what you need!
      </p>
    </Jumbotron>
  </Container>
);

export default Home;

import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Intro from './components/intro/Intro';
import Credit from './components/credit/Credit';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Col>
          <Row>
            <Intro />
          </Row>
          <Row>
            Films
          </Row>
          <Row>
            <Credit />
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;

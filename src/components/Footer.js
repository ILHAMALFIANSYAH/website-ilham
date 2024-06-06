import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col xs={1}>
            <div className="icon-placeholder"></div>
          </Col>
          <Col xs={1}>
            <div className="icon-placeholder"></div>
          </Col>
          <Col xs={1}>
            <div className="icon-placeholder"></div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs="auto">
            <span>Copyright 2024   AN - GYM</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

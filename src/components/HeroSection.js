import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero bg-light py-5 container">
      <Container>
        <Row>
          <Col md={6}>
            <h1>Welcome to Our Gym</h1>
            <p>Your fitness journey starts here.</p>
            <Button variant="dark">Join Now</Button>
          </Col>
          <Col md={6}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;

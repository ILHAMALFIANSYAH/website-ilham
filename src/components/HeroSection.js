import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero bg-light py-5 container">
      <Container>
        <Row>
          <Col md={6}>
          <br></br><br></br><br></br>
            <h1>Welcome to SMK SINGS BOGOR</h1>
            <p>Your singing journey begins here.</p>
            <Button variant="dark">Join Now</Button>
          </Col>
          <Col md={6}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;

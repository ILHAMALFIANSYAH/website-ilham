import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Section = () => {
  return (
    <section className="section">
      <Container>
        <Row>
          <Col md={8}>
            <div className="section-content">
              <h2>School Payments</h2>
              <br></br>
              <Row>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>School Entrance Fee</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>School Uniform Cost</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>School Bus Fees</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <br></br><br></br>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>Monthly Fee</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>Lunch Cost</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>Cost per Year</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div className="section-image">
              <img src="https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oUgAFEKHlBAIrfSrEDCsB6TXFA1EQIftV9i9cV~tplv-tej9nj120t-origin.webp" alt="Placeholder" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Section = () => {
  return (
    <section className="section">
      <Container>
        <Row>
          <Col md={8}>
            <div className="section-content">
              <h2>Rental List</h2>
              <br></br><br></br>
              <Row>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>Per Jam</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>Per Harian</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>Per Mingguan</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>Per Bulanan</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>Per tahun</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title><b>VIP + Bonus Pelatih</b></Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div className="section-image">
              <img src="https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg" alt="Placeholder" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const FeaturesSection = () => {
  return (
    <section className="features py-5">
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://www.mystudio.co.id/tinymce/images/Untitled-1_0000s_0000_Layer_15_eoavj5.jpg" />
              <Card.Body>
                <Card.Title><b>Training Room</b></Card.Title>
                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://www.akustikruang.com/joimg/portofolio/akustik-ruang-Studio-Musik-American-A.gif" />
              <Card.Body>
                <Card.Title><b>Content room</b></Card.Title>
                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://artikel.rumah123.com/news-content/img/2021/08/13134635/Untitled-design-2021-08-13T134542.210.jpg" />
              <Card.Body>
                <Card.Title><b>Filming Room</b></Card.Title>
                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FeaturesSection;

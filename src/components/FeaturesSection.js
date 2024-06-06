import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const FeaturesSection = () => {
  return (
    <section className="features py-5">
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://mataair.id/wp-content/uploads/2021/04/5-1-1.jpg" />
              <Card.Body>
                <Card.Title><b>GYM-rom VIP</b></Card.Title>
                <Card.Text>This VIP GYM room will get bonus supplements and mentoring and has a swimming pool etc. for the price / day Rp. 150,000 and for monthly Rp.4,000,000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://asset.kompas.com/crops/Zrmcdh4d4pRDqutGIEJyXZwEbnM=/0x0:780x520/1200x800/data/photo/2022/06/29/62bc28f230768.jpg" />
              <Card.Body>
                <Card.Title><b>GYM-rom 01</b></Card.Title>
                <Card.Text>This public GYM room will get a bonus supplement. for the price / day Rp. 90,000 and for monthly Rp.2,5000,000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://ik.imagekit.io/tvlk/blog/2020/04/Fitness-Center-Fairmont-Jakarta.jpg?tr=dpr-2,w-675" />
              <Card.Body>
                <Card.Title><b>GYM-rom 02</b></Card.Title>
                <Card.Text>This public GYM room will get a bonus supplement. for the price / day Rp. 90,000 and for monthly Rp.2,5000,000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FeaturesSection;

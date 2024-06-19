import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <Container className="container my-5">
      <Row className="align-items-center">
        <Col xs={1} className="text-center">
          <Button variant="link">&lt;</Button>
        </Col>
        <Col xs={3} className="containertext-center">
          <div className="profile-placeholder mb-3"></div>
          <Button variant="secondary" className="w-100 mb-2">Button 1</Button>
          <Button variant="secondary" className="w-100 mb-2">Button 2</Button>
          <Button variant="secondary" className="w-100 mb-2">Button 3</Button>
        </Col>
        <Col xs={1} className="text-center">
          <Button variant="link">&gt;</Button>
        </Col>
        <Col xs={6}>
          <Form>
            <Form.Group controlId="formInput1" className="mb-3">
              <Form.Control type="text" placeholder="Nickname"/>
            </Form.Group>
            <Form.Group controlId="formInput2" className="mb-3">
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formTextarea">
              <Form.Control as="textarea" rows={5} placeholder="Textarea" />
            </Form.Group>
          </Form>
         <Row className="mt-3">
        <Button variant="dark">Confirm</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;

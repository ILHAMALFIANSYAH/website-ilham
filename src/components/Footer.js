import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About Us</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Gallery</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact</a></li>
          </ul>
          <p class="text-center text-muted">© 2010  SMK SINGS BOGOR, Inc</p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;

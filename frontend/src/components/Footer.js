import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className='py-3 bg-light'>
      <Container>
        <Row>
          <Col className='text-center'>
            <h6 className='mb-0'>
              Copyright &copy; 2021 by{' '}
              <a href='https://monirhossain.com'>Monir Hossain</a>{' '}
            </h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

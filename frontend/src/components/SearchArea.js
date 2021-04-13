import React from 'react';
import { Col, Container, Row, Form, FormControl } from 'react-bootstrap';

const SearchArea = () => {
  return (
    <section className='py-100 '>
      <Container>
        <Row>
          <Col lg={6} className='mx-auto'>
            <h4 className='text-center mb-3'>Groceries delivered in 1 hour</h4>
            <Form inline className='w100'>
              <FormControl type='text' placeholder='Search' className='w-100' />
              {/* <Button variant='outline-success'>Search</Button> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SearchArea;

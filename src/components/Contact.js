import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    console.log(user, 'user');
  };
  return (
    <div id='contact'>
      <Container className='form-container-main mt-10 mb-5'>
        <Row className='form-container justify-content-center'>
          <Col className='sub-container1 pt-5 pb-5 ' lg='5' md='5' sm='12'>
            <h4 className='text-center pb-5'>Get in touch</h4>
            <Form className='ps-5 pe-5'>
              <Row>
                <Col>
                  <Form.Group className='mb-3'>
                    <Form.Control
                      type='text'
                      name='firstName'
                      value={user.firstName}
                      onChange={handleChange}
                      placeholder='First Name'
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className='mb-3'>
                    <Form.Control
                      type='text'
                      name='lastName'
                      value={user.lastName}
                      onChange={handleChange}
                      placeholder='Last Name'
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className='mb-3'>
                <Form.Control
                  type='email'
                  name='email'
                  value={user.email}
                  onChange={handleChange}
                  placeholder='Email'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='text'
                  name='message'
                  value={user.message}
                  onChange={handleChange}
                  placeholder='Message'
                  as='textarea'
                  rows={5}
                />
              </Form.Group>
              <div className='text-center'>
                <Button
                  variant='primary'
                  type='submit'
                  className='ps-5 pe-5'
                  onClick={login}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

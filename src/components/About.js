import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import group from '../assests/group.jpg';

const About = () => {
  return (
    <div id='aboutmain' xyz='fade up'>
      <Container className='about-main'>
        <Row className='about mt-10 pt-10'>
          <Col className='about-image' lg='6' md='6' sm='6'>
            <img src={group} alt='' loading='lazy' />
          </Col>
          <Col className='about-text'>
            <h4 className='text-center'>About Us</h4>
            <p className='pt-2'>
              Next Nest Technologies Pvt. Ltd. with a vision to serve innovative
              technology in service, training and product development with
              multiple Businesses.
            </p>
            <p className='pt-2'>
              Next Nest Technologies Pvt. Ltd. Providing multi-dimensional
              solutions using our skillset, industrial best practices and
              talented resources with good business models. Has a capacity and
              capability to understand the client requirements to deliver a
              better quality service as well as products.
            </p>
          </Col>
        </Row>
        <Row className='about-sub mt-10 pt-10'>
          <Col lg='6' md='6' sm='6'>
            <h4 className='text-center'>Vision</h4>
            <p className='pt-2'>
              Our vision is to provide good customer service and quality
              products to the market. We strongly believe in our commitment to
              service for the growth segment of customers. We believe in
              precision and high quality work. We are happy to work and want to
              be well placed in IT field.
            </p>
          </Col>
          <Col className='about-text'>
            <h4 className='text-center'>Mission</h4>
            <p className='pt-2'>
              {' '}
              We strive to meet the expectations of our customers by
              understanding their requirements using our knowledge to break
              barriers to achieve their goal.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

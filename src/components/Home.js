import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import web from '../assests/laptop.svg';
import mobile from '../assests/mobile.svg';
import crm from '../assests/development.svg';
import ai from '../assests/artificial-intelligence.svg';

const Home = () => {
  return (
    <div>
      <section className='home_section' id='home'>
        <div className='header_height sec_bg d-flex align-items-center'>
          <div className='container'>
            <div className='col-12 col-md-9 col-lg-6 pt-5 pb-5'>
              <h1 className='headerColor'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className='text-white lead'>
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>
              <button className='btn btn-lg col-lg-4 col-6 btn_custom btn_shadow'>
                <a href='#contact'> GET IN TOUCH</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id='services'>
        <Container className='mt-15 mb-5 pt-5 pb-5'>
          <div className='mt-15 mb-4 text-center'>
            <p className='display-6 mb-1 mt-5'>What we do...</p>
            <p className='text-muted'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <Row className='d-flex align-items-center justify-content-evenly mt-5 ourwork'>
            <Col className='col-md-4 col-lg-3 text-center'>
              <div className='box_border position-relative rounded pt-5 pb-3 px-3'>
                <div className='icons'>
                  <img src={crm} alt='' />
                </div>
                <h5 className='mb-2 mt-4'>
                  UI/UX <br />
                  Design
                </h5>
                <p className='text-muted text-left text-xl-center text-lg-center'>
                  Our UI/UX team is very creative in product development. What
                  you visioned that we will help you to make into reality. We
                  have matured designing team and we rely on established
                  standards and Hanson expertise hands-on expertise..
                </p>
              </div>
            </Col>
            <Col className='col-md-4 col-lg-3 text-center'>
              <div className='box_border position-relative rounded pt-5 pb-3 px-3'>
                <div className='icons'>
                  <img src={mobile} alt='' />
                </div>
                <h5 className='mb-2 mt-4'>Mobile App Development</h5>
                <p className='text-muted text-left text-xl-center text-lg-center'>
                  When you want to achieve productivity, mobile apps will come
                  in very handy, Our custom mobile application development
                  service will help you to meet your deadlines without any extra
                  hassle.
                </p>
              </div>
            </Col>
            <Col className='col-md-4 col-lg-3 text-center'>
              <div className='box_border position-relative rounded pt-5 pb-3 px-3'>
                <div className='icons'>
                  <img src={web} alt='' />
                </div>
                <h5 className='mb-2 mt-4'>Web Design and Development</h5>
                <p className='text-muted text-left text-xl-center text-lg-center'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </Col>
            <Col className='col-md-4 col-lg-3 text-center'>
              <div className='box_border position-relative rounded pt-5 pb-3 px-3'>
                <div className='icons'>
                  <img src={ai} alt='' />
                </div>
                <h5 className='mb-2 mt-4'>
                  Artificial <br />
                  Intelligence
                </h5>
                <p className='text-muted text-left text-xl-center text-lg-center'>
                  We understand the behaviour of the data and our artificial
                  intelligence research team is very hands-on in analyzing and
                  recognizing the pattern of any kind of data. our AI team will
                  help to take the right decision at right time. Experience the
                  power of AI.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;

// import React from 'react';
// import './Contact.css';

// import Nav from '../NavBar';
// function Contact() {
//   return (
//     <>
//     <Nav/>
//     </>
//   );
// }

// export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection";
import Nav from "../NavBar"
import "../styles/contact.css";
import  image from './conImg.jfif';

const Contact = () => {
  return (
    <>
    <Nav/>
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
                
              </Form>
            </Col>
            
            <Col lg="5" md="5">
            <img src={image} alt="Profile" height={300} width={400} />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
    </>
  );
};

export default Contact;



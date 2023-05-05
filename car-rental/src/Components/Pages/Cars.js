
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection";
import CarItem from "../UI/CarItem";
import carData from "../assets/data/carData";
import Nav from "../NavBar";
const Cars= () => {
  return (
    <>
    <Nav/>
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row>
          
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
    </>
  );
};

export default Cars;


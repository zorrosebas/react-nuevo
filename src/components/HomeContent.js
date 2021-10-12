import React from "react";
import { Container, Row, Col,  } from "react-bootstrap";

const HomeContent = () => {
  return (
    <>
      

      <Container style={{ marginTop: 30, marginBottom: 30 }}>
        <Row>
          <Col md={6} lg={6} className="text-center mb-4">
            <img
              style={{ width: "80%", borderRadius: 10 }}
              src="./assets/banner1.jpg"
              alt="left-promo"
            />
          </Col>
          <Col md={6} lg={6} className="text-center mb-4">
            <img
              style={{ width: "80%", borderRadius: 10 }}
              src="./assets/banner2.jpg"
              alt="left-promo"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeContent;

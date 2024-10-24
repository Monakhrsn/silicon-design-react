import { Container, Row, Col, Image } from "react-bootstrap";
import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  return (
    <section id="clients-testimonials" className="d-none d-xl-block">
      <Container>
        <Row className="pt-4 pb-4">
          <Col xs={4}>
            <h2>Clients are Loving Our App</h2>
          </Col>
          <TestimonialCard
            text="Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.
                  Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel.
                  Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet."
            imageSrc="/assets/images/icons/avatar-female.svg"
            imageAlt="A female designer avatar"
            nameClass="name"
            nameText="Fannie Summers"
            proffClass="small-text"
            proffText="Designer"
          />
          <TestimonialCard
            text="Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
                sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo
                aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo
                turpis sit amet."
            imageSrc="/assets/images/icons/avatar-male.svg"
            imageAlt="A male developer avatar"
            nameClass="name"
            nameText="Albert Flores"
            proffClass="small-text"
            proffText="Developer"
          />
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

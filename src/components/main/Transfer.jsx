import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Transfer = () => {
  return (
    <section
      id="transfer-simple-receive"
      className="d-none d-xl-block"
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={4} id="simple-transfer-info">
            <h3>Make your money transfer simple and clear</h3>
            <ul>
              <li>
                <Image
                  src="/assets/images/icons/bx-check-circle.svg"
                  alt="Check icone"
                />
                Banking transactions are free for you
              </li>
              <li>
                <Image
                  src="/assets/images/icons/bx-check-circle.svg"
                  alt="Check icone"
                />
                No monthly cash commission
              </li>
              <li>
                <Image
                  src="/assets/images/icons/bx-check-circle.svg"
                  alt="Check icone"
                />
                Manage payments and transactions online
              </li>
            </ul>
            <Button className="learn-more-btn transition pe-5">
              Learn more
            </Button>
          </Col>
          <Col xs={5}>
            <Image
              className="img-fluid"
              src="/assets/images/make-transer-simple/send-money-to.svg"
              alt="transfer curve"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={5}>
            <Image
              className="img-fluid"
              src="/assets/images/make-transer-simple/contacts-visa-card.svg"
              alt="Contact list with a visa card"
            />
          </Col>
          <Col xs={4} id="receive-payment-info">
            <h3>Receive payment from international bank details</h3>
            <Row id="bank-details-wrapper" className="mt-4 mb-4">
              <Col xs={6}>
                <Image src="/assets/images/payments.svg" alt="Payment icon" />
                <p>
                  Manage your payments online. Mollis congue egestas egestas
                  fermentum fames.
                </p>
              </Col>
              <Col xs={6} id="wallet">
                <Image src="/assets/images/cashback.svg" alt="A wallet icon" />
                <p>
                  A elementur and imperdiet enim, pretium etiam facilisi aenean
                  quam mauris.
                </p>
              </Col>
            </Row>
            <Button className="learn-more-btn transition pe-5">
              Learn more{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Transfer;

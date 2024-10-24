import { Container, Col, Row, Image, Button } from "react-bootstrap";

const Subscription = () => {
  return (
    <section className="container pt-md-4">
      <Container>
        <Row>
          <Col>
            <div className="subscription">
              <Row className="align-items-md-center">
                <Col md={6}>
                  <Row id="newsletter" className="text-center py-5">
                    <div className="d-flex justify-content-center align-items-center px-5">
                      <Col xs={4} xl={2} className="me-xl-4">
                        <Image
                          className="img-fluid"
                          src="/assets/images/icons/notification.svg"
                          alt="Bell notification"
                        />
                      </Col>
                      <h4 className="text-start d-xl-none">
                        Subscribe to our newslwtter
                      </h4>
                      <h4 className="text-start d-none d-xl-block col-xl-10 ">
                        Subscribe to our newsletter to stay informed about
                        latest updates
                      </h4>
                    </div>
                  </Row>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col className="d-flex justify-content-start align-items-center px-5">
                      <div className="input-group input-wrapper mb-4 mb-md-0">
                        <input
                          type="text"
                          className="form-control email"
                          placeholder="Your Email"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <Button
                          className="btn btn-primary transition"
                          type="button"
                          id="button-addon2"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscription;

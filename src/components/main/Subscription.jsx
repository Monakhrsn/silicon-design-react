import { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Image,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";

const Subscription = (e) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(true)

  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const changeHandler = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(newEmail.toLowerCase().match(isValidEmail));
  };

  const submitHandler = async(e) => {
    e.preventDefault();

    if (!isValid) {
      return alert(`Emai address you have insert i not ${email}`);
    }


    // try {
    //   const res = await fetch(
    //     "https://win24-assignment.azurewebsites.net/api/forms/subscribe"
    //   );

    //   if (!res.ok) {
    //     throw new Error(`An Error occured! Status: ${res.status}`);
    //   }

    //   const fetchResponse = await res.json();
    //   console.log(fetchResponse)

    //   setData(fetchResponse);
    //   setLoading(false);
    // } catch (err) {
    //   setError(err);
    //   setLoading(false);
    // }

  
    if (loading) {
      return <div>Loading.. .</div>
    }
  
    if (error) {
      return <div>Error: {error.message}</div>
    }
  };

  return (
    <section className="pt-md-4">
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
                      <Form onSubmit={submitHandler}>
                        <InputGroup className="input-wrapper mb-4 mb-md-0">
                          <Form.Control
                            type="email"
                            className={`form-control email ${
                              isValid ? "" : "is-invalid"
                            }`}
                            placeholder="Your Email"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            value={email}
                            onChange={(e) => changeHandler(e)}
                            required
                          />

                          <Button
                            className="btn btn-primary transition"
                            type="submit"
                            id="button-addon2"
                            disabled={!isValid}
                          >
                            Subscribe
                          </Button>
                          {!isValid && (
                            <div className="invalid-feedback">
                              Please enter a valid email address.
                            </div>
                          )}
                        </InputGroup>
                      </Form>
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

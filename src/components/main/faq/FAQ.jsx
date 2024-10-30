import { Col, Button, Row, Container, Accordion } from "react-bootstrap";
import ContactUs from "./ContactUs";
import AccordionItem from "./AccordionItem";
import { useEffect, useState } from "react";

const FAQ = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setError(null);

      const res = await fetch(
        "https://win24-assignment.azurewebsites.net/api/faq"
      );

      if (!res.ok) {
        throw new Error(`An Error occured! Status: ${res.status}`);
      }

      const fetcheResponse = await res.json();

      setData(fetcheResponse);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading.. .</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section id="FAQ-section">
      <Container>
        <Row>
          <Col xs={12} xl={5}>
            <Row>
              <Col className="head-wrapper text-center text-xl-start my-md-5 my-5">
                <h2>Any questions? Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
              </Col>
            </Row>
            <Row className="d-none d-xl-flex justify-content-md-between ">
              <ContactUs
                buttonClassName="btn-border-none left justify-content-md-between"
                imageSrc="/assets/images/icons/phone.svg"
                imageAlt="Phone ringing icon"
                pText="Still have questions?"
                buttonText="Contact us"
              />
              <ContactUs
                imageSrc="/assets/images/icons/message.svg"
                imageAlt="A pop up message"
                pText="Don't like phone calls?"
                buttonClassName="btn-border-none right"
                buttonText="Contact us"
              />
            </Row>
          </Col>
          <Col xs={12} xl={7} className="my-xl-5">
            <Row>
              <Accordion defaultActiveKey="0">
                {error && <p>Error, loading : {error}</p>}
                {data.length > 0 ? (
                  data.map((item, id) => (
                    <AccordionItem
                      key={id}
                      eventKey={id}
                      headerText={item.title}
                      bodyText={item.content}
                    />
                  ))
                ) : (
                  <p>Loading .. .</p>
                )}
              </Accordion>
            </Row>
            <Row className="d-none d-md-flex  d-xl-none">
              <ContactUs
                imageSrc="/assets/images/icons/phone.svg"
                imageAlt="Phone ringing icon"
                pText="Still have questions?"
                buttonClassName="btn-border-none left"
                buttonText="Contact us"
              />
              <ContactUs
                imageSrc="/assets/images/icons/message.svg"
                imageAlt="A pop up message"
                pText="Don't like phone calls?"
                buttonClassName="btn-border-none right"
                buttonText="Contact us"
              />
            </Row>
            <Row className="d-md-none">
              <Col xs={12} className="my-5 text-center transition">
                <Button className="btn btn-primary py-3 px-4">
                  <span className="pe-2">Contact us now</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;

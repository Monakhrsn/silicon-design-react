import { Col, Button, Row, Container, Accordion } from "react-bootstrap";
import ContactUs from "./ContactUs";
import AccordionItem from "./AccordionItem";

const FAQ = () => {

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
                <AccordionItem
                  eventKey="0"
                  headerText="Is any of my personal information stored in the App?"
                  bodyText="Nunc duis id aenean gravida tincidunt eu, tempor
                    ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                    Aliquet pretium cursus adipiscing gravida et consequat
                    lobortis arcu velit. Nibh pharetra fermentum duis accumsan
                    lectus non. Massa cursus molestie lorem scelerisque
                    pellentesque. Nisi, enim, arcu purus gravida adipiscing
                    euismod montes, duis egestas. Vehicula eu etiam quam
                    tristique tincidunt suspendisse ut consequat."
                />
                <AccordionItem
                  eventKey="1"
                  headerText="What formats can I download my transaction history in?"
                  bodyText="It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the"
                />
                <AccordionItem
                  eventKey="2"
                  headerText="Can I schedule future transfers?"
                  bodyText="It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the"
                />
                <AccordionItem
                  eventKey="3"
                  headerText="When can I use Banking App services?"
                  bodyText="It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the"
                />
                <AccordionItem
                  eventKey="4"
                  headerText="Can I create my own password that is easy for me to
                    remember?"
                  bodyText="It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the"
                />
                <AccordionItem
                  eventKey="5"
                  headerText="What happens if I forget or lose my password?"
                  bodyText="It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the"
                />
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

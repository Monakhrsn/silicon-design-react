import { Container, Row, Col, Image, Button } from "react-bootstrap";
import TransferCard from "./TransferCard";
import TransferLi from "./TransferLi";
import PrimaryButton from "../../PrimaryButton";

const Transfer = () => {
  return (
    <section id="transfer-simple-receive" className="d-none d-xl-block">
      <Container>
        <Row className="justify-content-center">
          <Col xs={4} id="simple-transfer-info">
            <h3>Make your money transfer simple and clear</h3>
            <ul>
              <TransferLi
                imageSrc="/assets/images/icons/bx-check-circle.svg"
                imageAlt="Check icone"
                text="Banking transactions are free for you"
              />
              <TransferLi
                imageSrc="/assets/images/icons/bx-check-circle.svg"
                imageAlt="Check icone"
                text="No monthly cash commission"
              />
              <TransferLi
                imageSrc="/assets/images/icons/bx-check-circle.svg"
                imageAlt="Check icone"
                text="Manage payments and transactions online"
              />
            </ul>
            <PrimaryButton
              className="learn-more-btn transition pe-5"
              text="Learn more"
            />
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
              <TransferCard
                imageSrc="/assets/images/payments.svg"
                imageAlt="Payment icon"
                text="Manage your payments online. Mollis congue egestas egestas
                  fermentum fames."
                id="online"
              />
              <TransferCard
                imageSrc="/assets/images/cashback.svg"
                imageAlt="A wallet icon"
                text="A elementur and imperdiet enim, pretium etiam facilisi aenean
                  quam mauris."
                id="wallet"
              />
            </Row>
            <PrimaryButton
              className="learn-more-btn transition pe-5"
              text="Learn more"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Transfer;

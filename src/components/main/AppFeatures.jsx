import { Container, Row, Col, Image } from "react-bootstrap";
import FeaturesCard from "./FeaturesCard";

const AppFeatures = () => {
  return (
    <Container className="mt-5 mb-5">
      <section id="app-features-section">
        <Row>
          <Col className="d-none d-xl-flex">
            <Image
              src="/assets/images/features.svg"
              alt="Mobile phone with a visa card on it"
            />
          </Col>
          <Col xs={12} xl={7}>
            <Row id="features-intro" className="text-center text-xl-start">
              <h2>App Features</h2>
              <p className="pt-3 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                volutpat mollis egestas. Nam luctus facilisis ultrices.
                Pellentesque volutpat ligula est. Mattis fermentum, at nec
                lacus.
              </p>
            </Row>
            <Row id="cards-wrapper" className="mt-xl-4">
              <Col xs={12} md={6}>
                <FeaturesCard
                  title="Easy Payments"
                  imageSrc="/assets/images/payments.svg"
                  imageAlt="Payment card icon"
                  text="Id mollis consectetur congue egestas egestas suspendisse
                        blandit justo."
                />
              </Col>
              <Col xs={12} md={6}>
                <FeaturesCard
                  imageSrc="/assets/images/security.svg"
                  imageAlt="Secuirity icon"
                  title="Data Security"
                  text="Augue pulvinar justo, fermentum fames aliquam accumsan
                        vestibulum non."
                />
              </Col>
              <Col xs={12} md={6}>
                <FeaturesCard
                  imageSrc="/assets/images/statistics.svg"
                  imageAlt="Statistic chart icon"
                  title="Cost Statistics"
                  text="Mattis urna ultricies non amet, purus in auctor non.
                        Odio vulputate ac nibh."
                />
              </Col>
              <Col xs={12} md={6}>
                <FeaturesCard
                  imageSrc="/assets/images/support.svg"
                  imageAlt="conversion icon with question marks"
                  title="Support 24/7"
                  text="A elementum, imperdiet enim, pretium etiam facilisi in
                        aenean quam mauris."
                />
              </Col>
              <Col xs={12} md={6}>
                <FeaturesCard
                  imageSrc="/assets/images/cashback.svg"
                  imageAlt="cashback"
                  title="Regular Cashback"
                  text="Sit facilisis dolor arcu, fermentum vestibulum arcu
                        elementum imperdiet eleifend."
                />
              </Col>
              <Col xs={12} md={6}>
                <FeaturesCard
                  imageSrc="/assets/images/happy.svg"
                  imageAlt="A happay face icon"
                  title="Top Standards"
                  text="Faucibus cursus maecenas lorem cursus nibh. Sociis sit
                        risus id. Sit facilisis dolor arcu."
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AppFeatures;

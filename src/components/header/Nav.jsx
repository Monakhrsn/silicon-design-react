import {
  Navbar,
  Container,
  Row,
  Col,
  Image,
  Nav as BootstrapNav,
} from "react-bootstrap";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";
import DarkModeSwitch from "./DarkModeSwitch";

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Row>
      <Navbar
        expanded={expanded}
        expand="xl"
        className="align-items-center"
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Col xs={6} xl={2}>
            <Navbar.Brand href="index.html">
              <Image
                className="logo"
                src="/assets/images/logo.svg.svg"
                alt="Silicon logo"
              />
              <span className="logo-text">Silicon</span>
            </Navbar.Brand>
          </Col>
          <Col xl={2} className="features-link d-none d-xl-block ">
            <BootstrapNav.Link href="#">Features</BootstrapNav.Link>
          </Col>
          <Col xs={6} xl={8}>
            <Row className="justify-content-end align-items-center">
              <DarkModeSwitch />
              <Col xs={3} md={2} className="d-xl-none navbar-toggle">
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  onClick={() => setExpanded(!expanded)}
                ></Navbar.Toggle>
              </Col>
              <Col xl={3} className="d-none d-xl-block text-end">
                <PrimaryButton
                  className="sign-btn transition"
                  text="Sign in / up"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Navbar.Collapse id="basic-navbar-nav">
                <BootstrapNav className="ms auto d-xl-none text-center">
                  <BootstrapNav.Link href="#" className="features-link">
                    Features
                  </BootstrapNav.Link>
                  <Col className="d-xl-none">
                    <PrimaryButton
                      className="sign-btn transition"
                      text="Sign in / up"
                    />
                  </Col>
                </BootstrapNav>
              </Navbar.Collapse>
            </Row>
          </Col>
        </Container>
      </Navbar>
    </Row>
  );
};

export default Nav;

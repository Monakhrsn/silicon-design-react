import {
  Navbar,
  Row,
  Col,
  Container,
  Image,
  Nav as BootstrapNav,
} from "react-bootstrap";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";
import DarkModeSwitch from "./DarkModeSwitch";

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  return (
      <Navbar
        expanded={expanded}
        expand="xl"
        onToggle={() => setExpanded(!expanded)}
      >
       <Container>
          <Row className="align-items-center">
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
                <Col xs={4} md={3} xl={2} className="text-end form-wrapper">
                  <DarkModeSwitch />
                </Col>
                <Col xs={3} md={2} className="d-xl-none navbar-toggle">
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                  ></Navbar.Toggle>
                </Col>
                <Col sm={5} xl={3} className="d-none d-xl-block text-end">
                  <PrimaryButton
                    className="sign-btn transition"
                    text="Sign in / up"
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <Navbar.Collapse id="basic-navbar-nav">
                <BootstrapNav className="ms auto d-xl-none text-center features-link">
                  <BootstrapNav.Link href="#">
                    Features
                  </BootstrapNav.Link>
                  <Col>
                    <PrimaryButton
                      className="sign-btn transition"
                      text="Sign in / up"
                    />
                  </Col>
                </BootstrapNav>
              </Navbar.Collapse>
            </Col>
          </Row>
          </Container>
      </Navbar>
  );
};

export default Nav;

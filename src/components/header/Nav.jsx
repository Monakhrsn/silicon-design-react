import { Navbar, Row, Col, FormCheck, NavbarBrand, Button, Image } from "react-bootstrap";
import PrimaryButton from "../PrimaryButton";

const Nav = () => {
  return (
    <Row>
      <Navbar className="align-items-center">
        <Col xs={6} xl={2}>
          <NavbarBrand href="index.html">
            <Image
              className="logo"
              src="/assets/images/logo.svg.svg"
              alt="Silicon"
            />
            <span className="logo-text">Silicon</span>
          </NavbarBrand>
        </Col>
        <Col xl={2} className="featurs-link d-none d-xl-block ">
          <a href="#">Features</a>
        </Col>
        <Col xs={6} xl={8}>
          <Row className="justify-content-end align-items-center">
            <label
              htmlFor="flexSwitchCheckDefault"
              className="dark-mode-text d-none col-4 d-md-block text-md-end col-xl-2"
              aria-label="darkmode switch"
            >
              Dark Mode
            </label>
            <Col xs={3} xl={2}>
              <FormCheck
                className="form-check-input"
                type="switch"
                id="flexSwitchCheckDefault"
              />
            </Col>
            <Col xs={2} className="d-xl-none">
                <Button className="navbar-toggle ">
                  <span className="navbar-toggle"></span>
                </Button>
            </Col>
            <Col xl={2} className="d-none d-xl-block">
            <PrimaryButton 
            className="sign-btn transition"
            text="Sign in / up"
            />
            </Col>
          </Row>
        </Col>
      </Navbar>
    </Row>
  );
};

export default Nav;

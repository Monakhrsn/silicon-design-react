import { Col, Form } from "react-bootstrap"

const DarkModeSwitch = () => {
  return (
    <>
      <Form.Label
        htmlFor="flexSwitchCheckDefault"
        className="dark-mode-text d-none col-4 d-md-block text-md-end"
        xl={2}
        aria-label="darkmode switch"
      >
        Dark Mode
      </Form.Label>
      <Col xs={3} xl={2}>
        <Form.Check
          className="form-check-input"
          type="switch"
          id="flexSwitchCheckDefault"
        />
      </Col>
    </>
  );
};

export default DarkModeSwitch;

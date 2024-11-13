import { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const themeMode = localStorage.getItem("themeMode");

    if (themeMode === "dark") {
      enableDarkMode();
    } else if (themeMode === "light") {
      disableDarkMode();
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  const enableDarkMode = () => {
    setIsDarkMode(true);
    localStorage.setItem("themeMode", "dark");
    document.body.classList.add("dark");
  };

  const disableDarkMode = () => {
    setIsDarkMode(false);
    localStorage.setItem("themeMode", "light");
    document.body.classList.remove("dark");
  };

  return (
    <Col xs={3} md={5} xl={4} className="form-wrapper" >
      <Row className="text-xl-end">
        <Col md={8} xl={10} >
          <Form.Label
            className="dark-mode-text d-none d-md-block text-md-end"
            aria-label="darkmode switch"
          >
            Dark Mode
          </Form.Label>
        </Col>
        <Col>
          <Form.Check
            // className="form-check-input"
            type="switch"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default DarkModeSwitch;

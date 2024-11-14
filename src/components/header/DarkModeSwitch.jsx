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
    <Row className="d-flex align-items-center justify-content-end">  
      <Col sm={8} xl={10}>
        <Form.Label
          className="dark-mode-text d-none d-md-block text-md-end"
          aria-label="darkmode switch"
        >
          Dark Mode
        </Form.Label>
      </Col>  
      <Col sm={4} xl={2} className="text-center" >
        <Form.Check
          type="switch"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
      </Col>
    </Row>
  );
};

export default DarkModeSwitch;

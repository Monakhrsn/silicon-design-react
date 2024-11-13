import { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

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
    <Col xs={3} md={5} xl={4} className="form-wrapper">
      <Form.Label
        className="dark-mode-text d-none d-md-block text-md-end"
        aria-label="darkmode switch"
      >
        Dark Mode
      </Form.Label>
      <Form.Check
        // className="form-check-input"
        type="switch"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
    </Col>
  );
};

export default DarkModeSwitch;

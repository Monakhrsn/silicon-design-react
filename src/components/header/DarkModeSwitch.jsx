import { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const hasDarkMode = localStorage.getItem("darkMode");

    if (
      hasDarkMode === "dark" ||
      (!hasDarkMode &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      disableDarkMode();
    } else {
      setIsDarkMode(true);
      enableDarkMode();
    }
  };

  const enableDarkMode = () => {
    setIsDarkMode(true);
    localStorage.setItem("darkMode", "dark");
    document.body.classList.add("dark");
  };

  const disableDarkMode = () => {
    setIsDarkMode(false);
    localStorage.setItem("darkMode", "light");
    document.body.classList.remove("dark");
  };

  return (
    <>
      <Form.Label
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
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
      </Col>
    </>
  );
};

export default DarkModeSwitch;

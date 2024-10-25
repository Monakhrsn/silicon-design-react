import { Accordion } from "react-bootstrap";

const AccordionItem = ({ eventKey, headerText, bodyText }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        {headerText}
      </Accordion.Header>
      <Accordion.Body>
        {bodyText}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItem;

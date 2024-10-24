import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return ( 
    <footer>
      <Container>
        <Row className="text-center py-4">
          <span>© 2024 Silicon. All rights reserved.</span>
          <span>Credit MadrasThemes</span>
        </Row>
      </Container>   
    </footer>
  );
}
 
export default Footer;
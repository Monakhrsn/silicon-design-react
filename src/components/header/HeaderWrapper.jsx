import Nav from './Nav';
import Header from './Hero';
import { Container, Row, Col, Button } from 'react-bootstrap';


const HeaderWrapper = () => {
  return ( 
    <header className="main-header">
      <Container >
        < Nav />
        <Header /> 
      </Container>
    </header>
   );
}
 
export default HeaderWrapper;
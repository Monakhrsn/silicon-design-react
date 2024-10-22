import Nav from './Nav';
import Header from './Hero';
import { Container } from 'react-bootstrap';


const HeaderWrapper = () => {
  return ( 
      <Container className="header-wrapper">
        < Nav />
        <Header /> 
      </Container>
   );
}
 
export default HeaderWrapper;
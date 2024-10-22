import Nav from './Nav';
import Header from './Hero';
import { Container } from 'react-bootstrap';


const HeaderWrapper = () => {
  return ( 
    <header className="header-wrapper">
      <Container>
        < Nav />
        <Header /> 
      </Container>
    </header>
  );
}
 
export default HeaderWrapper;
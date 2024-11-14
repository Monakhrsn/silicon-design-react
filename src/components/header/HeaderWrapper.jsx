import Nav from './Nav';
import Hero from './Hero';
import { Container } from 'react-bootstrap';


const HeaderWrapper = () => {
  return ( 
    <header className="header-wrapper">
      <Nav />
      <Hero /> 
    </header>
  );
}
 
export default HeaderWrapper;
import Nav from './Nav';
import Header from './Header'

const MainHeader = () => {
  return ( 
    <header className="main-header">
      <div className="container">
        < Nav />
        <Header /> 
      </div>
    </header>
   );
}
 
export default MainHeader;
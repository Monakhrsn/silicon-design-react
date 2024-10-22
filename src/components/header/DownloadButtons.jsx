import { Col, Image } from 'react-bootstrap';


const DownloadButtons = () => {
  return ( 
    <>
      <Col xs={12} md={6} xl={4} className="pb-3">
        <a href="#" id="appStore" className="d-flex justify-content-center justify-align-center">
          <Image className="show-light img-fluid" src="/assets/images/icons/appstore-light.svg" alt="App Store" />
          <Image className="show-dark img-fluid" src="/assets/images/icons/appstore-dark.svg" alt="App Store Dark" />
        </a>
      </Col>
      <Col xs={12} md={6} xl={4}>
        <a href="#" id="googleplay" className="d-flex justify-content-center justify-align-center">
          <Image className="show-light img-fluid" src="/assets/images/icons/googleplay-light.svg" alt="Google Play" />
          <Image className="show-dark img-fluid" src="/assets/images/icons/googleplay-dark.svg" alt="Google Play Dark" />                      
        </a>  
      </Col> 
    </>
   );
}
 
export default DownloadButtons;
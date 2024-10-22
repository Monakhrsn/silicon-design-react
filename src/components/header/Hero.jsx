import { Row, Col, Button, Image } from 'react-bootstrap';
import DownloadButtons from './DownloadButtons';

const Hero = () => {
  return ( 
    <Row className="hero mt-5 pb-md-5">
      <Col>
        <Row className="justify-content-md-center justify-content-xl-start align-items-xl-end">
          <Col xs={12} md={6}>
            <h1 className="text-center text-xl-start">Manage All Your Money in One App</h1>
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <Row>
          <Col xs={12} md={6} className="mt-md-5 mt-xl-3">
            <p className="text-center text-md-start mt-md-5 mt-xl-0 mb-xl-5">
              We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.
            </p> 
            <Row>
              <DownloadButtons />  
            </Row>
            <div className="discover-btn-wrapper mt-4 mb-4 mb-md-1 text-center text-md-start">
              <Button variant="light" className="accardion-btn rounded-circle" />
              <span className="discover-more ps-2 align-middle">Discover more</span> 
            </div>
          </Col>          
        </Row>     
      </Col> 
    </Row>
  );
}

export default Hero;

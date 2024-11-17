import { Col, Button, Image } from "react-bootstrap";

const ContactUs = ({
  buttonClassName,
  imageSrc,
  imageAlt,
  pText,
  buttonText,
}) => {
  return (
    <Col xs={6}>
      <div className="contact-us-wrapper">
        <Image className="img-fluid" src={imageSrc} alt={imageAlt} />
        <p>{pText}</p>
        <Button className={buttonClassName}>
          <span className="pe-2">{buttonText}</span>
        </Button>
      </div>
    </Col>
  );
};

export default ContactUs;

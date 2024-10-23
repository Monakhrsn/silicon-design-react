import { Container, Row, Col, Image } from "react-bootstrap";

const FeaturesCard = ({ imageSrc, imageAlt, title, text }) => {
  return (
    <div className="card-wrapper">
      <Row>
        <Col xs={2} md={3}>
          <Image src={imageSrc} alt={imageAlt} />
        </Col>
        <Col xs={10} md={9}>
          <h4>{title}</h4>
          <p>{text}</p>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturesCard;

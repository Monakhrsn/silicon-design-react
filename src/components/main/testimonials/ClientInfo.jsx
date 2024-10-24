import { Row, Col, Image } from "react-bootstrap";

const ClientInfo = ({
  imageClass,
  imageSrc,
  imageAlt,
  nameClass,
  nameText,
  proffClass,
  proffText,
}) => {
  return (
    <Row>
      <Col xs={3}>
        <Image className={imageClass} src={imageSrc} alt={imageAlt} />
      </Col>
      <Col xs={9} className="text-start">
        <span className={nameClass}>{nameText}</span>
        <br />
        <span className={proffClass}>{proffText}</span>
      </Col>
    </Row>
  );
};

export default ClientInfo;

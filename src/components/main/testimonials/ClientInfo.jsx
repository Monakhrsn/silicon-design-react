import { Row, Col, Image } from "react-bootstrap";

const ClientInfo = ({
  imageClass,
  avatarUrl,
  nameClass,
  name,
  proffClass,
  jobbRole,
}) => {
  return (
    <Row>
      <Col xs={3}>
        <Image className={imageClass} src={avatarUrl} />
      </Col>
      <Col xs={9} className="text-start">
        <span className={nameClass}>{name}</span>
        <br />
        <span className={proffClass}>{jobbRole}</span>
      </Col>
    </Row>
  );
};

export default ClientInfo;

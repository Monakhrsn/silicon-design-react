import { Row, Col, Image } from "react-bootstrap";

const ClientInfo = ({ imageClass, avatarUrl, name, jobbRole }) => {
  return (
    <Row>
      <Col xs={3}>
        <Image className="img-fluid" src={avatarUrl} />
      </Col>
      <Col xs={9} className="text-start">
        <span className="name">{name}</span>
        <br />
        <span className="small-text">{jobbRole}</span>
      </Col>
    </Row>
  );
};

export default ClientInfo;

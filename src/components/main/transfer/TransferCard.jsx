import { Col, Image } from "react-bootstrap";

const TransferCard = ({ imageSrc, imageAlt, text, id }) => {
  return (
    <Col xs={6} id={id}>
      <Image src={imageSrc} alt={imageAlt} />
      <p>{text}</p>
    </Col>
  );
};

export default TransferCard;

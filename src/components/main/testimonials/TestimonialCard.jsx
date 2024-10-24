import { Col, Row, Image } from "react-bootstrap";
import ClientInfo from "./ClientInfo";
import Rating from "./Rating";

const TestimonialCard = ({ text, imageSrc, imageAlt, nameClass, nameText, proffClass, proffText  }) => {
  return (
    <Col xs={4}>
      <div className="card testimonial-card shadow-sm">
        <div className="quote-img">
          <Image
            className="img-fluid"
            src="/assets/images/icons/quote-white.svg"
            alt=""
          />
        </div>
        <Rating
        className="rating" 
        filledClass="star filled"
        unfilledClass="star unfilled"
        />
        <p>
          {text}
        </p>
        <ClientInfo 
        imageClass="img-fluid"
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        nameClass={nameClass}
        nameText={nameText}
        proffClass={proffClass}
        proffText={proffText}
        />
      </div>
    </Col>
  );
};

export default TestimonialCard;

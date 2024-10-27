import { Col, Image } from "react-bootstrap";
import ClientInfo from "./ClientInfo";
import Ratings from "./Ratings";

const TestimonialCard = ({
  text,
  avatarUrl,
  nameClass,
  name,
  jobbClass,
  jobbRole,
  rating
}) => {
  return (
    <Col xs={4}>
      <div className="card testimonial-card shadow-sm">
        <div className="quote-img">
          <Image
            className="img-fluid"
            src="/assets/images/icons/quote-white.svg"
          />
        </div>
        <Ratings
          className="rating"
          rating={rating}
          filledClass="star filled"
          unfilledClass="star unfilled"
        />
        <p>{text}</p>
        <ClientInfo
          imageClass="img-fluid"
          avatarUrl={avatarUrl}
          nameClass={nameClass}
          name={name}
          jobbClass={jobbClass}
          jobbRole={jobbRole}
        />
      </div>
    </Col>
  );
};

export default TestimonialCard;

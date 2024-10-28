import { Container, Row, Col, Image } from "react-bootstrap";
import TestimonialCard from "./testimonialCard";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [data, settData] = useState([]);
  const [error, setError] = useState([null]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://win24-assignment.azurewebsites.net/api/testimonials"
        );

        if (!res.ok) {
          throw new Error(`An Error occured! Status: ${res.status}`);
        }

        const fetchedData = await res.json();
        console.log(fetchedData);

        settData(fetchedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const mappedData = data.map((item, id) => (
    <TestimonialCard
      key={id}
      text={item.comment}
      avatarUrl={item.avatarUrl}
      name={item.author}
      rating={item.starRating}
      jobbRole={item.jobRole}
    />
  ))

  return (
    <section id="clients-testimonials" className="d-none d-xl-block">
      <Container>
        <Row className="pt-4 pb-4">
          <Col xs={4}>
            <h2>Clients are Loving Our App</h2>
          </Col>
          { mappedData }
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

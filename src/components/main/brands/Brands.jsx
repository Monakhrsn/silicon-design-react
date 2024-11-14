import { Container } from "react-bootstrap";
import Brand from "./Brand";

const Brands = () => {
  return (
    <section
      id="brands-section"
      className="container mt-5 mb-5 d-none d-md-block"
    >
      <Container>
        <div className="row">
          <Brand
            brandId="brand-1"
            imageSrc="/assets/images/brand-1.svg"
            imageAlt="brand icon 1"
          />
          <Brand
            brandId="brand-2"
            imageSrc="/assets/images/brand-2.svg"
            imageAlt="brand icon 2"
          />
          <Brand
            brandId="brand-3"
            imageSrc="/assets/images/brand-3.svg"
            imageAlt="brand icon 3"
          />
          <Brand
            brandId="brand-4"
            imageSrc="/assets/images/brand-4.svg"
            imageAlt="brand icon 4"
          />
          <Brand
            brandId="brand-5"
            className="d-none d-xl-block"
            imageSrc="/assets/images/brand-5.svg"
            imageAlt="brand icon 5"
          />
          <Brand
            brandId="brand-6"
            className="d-none d-xl-block"
            imageSrc="/assets/images/brand-6.svg"
            imageAlt="brand icon 6"
          />
        </div>
      </Container>
    </section>
  );
};

export default Brands;

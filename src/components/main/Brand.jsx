import { Image } from "react-bootstrap";

const Brand = ({ brandId, imageSrc, imageAlt, className }) => {
  return (
    <div id={brandId} className={`col-md-3 col-xl-2 ${className || ""}`}>
      <div className="img-box">
        <Image src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default Brand;

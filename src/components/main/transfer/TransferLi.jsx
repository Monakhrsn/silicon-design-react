import { Image } from "react-bootstrap";

const TransferLi = ({ imageSrc, imageAlt, text }) => {
  return (
    <li>
      <Image src={imageSrc} alt={imageAlt} />
      {text}
    </li>
  );
};

export default TransferLi;

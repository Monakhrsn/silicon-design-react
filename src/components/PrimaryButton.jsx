import { Button } from "react-bootstrap";

const PrimaryButton = ({ className, text }) => {
  return <Button className={className}>{text}</Button>;
};

export default PrimaryButton;

const Rating = ({ isFilled }) => {
  return <span className={isFilled ? "star filled" : "star unfilled"}></span>;
};

export default Rating;

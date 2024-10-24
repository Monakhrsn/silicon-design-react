

const Rating = ({ filledClass, unfilledClass}) => {
  return (
    <div className="rating">
      <span className={filledClass}></span>
      <span className={filledClass}></span>
      <span className={filledClass}></span>
      <span className={filledClass}></span>
      <span className={unfilledClass}></span>
    </div>
  );
};

export default Rating;

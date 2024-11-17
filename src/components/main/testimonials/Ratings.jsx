import Rating from "./Rating";

const Ratings = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++)
    stars.push(<Rating key={i} isFilled={i <= rating} />);

  return <div className="rating">{stars}</div>;
};

export default Ratings;

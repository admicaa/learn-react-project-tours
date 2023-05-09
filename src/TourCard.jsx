const TourCard = ({ tour, removeTours }) => {
  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} className="img" />
      <span className="tour-price">{tour.price}</span>
      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>{tour.info}</p>
        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTours(tour.id)}
        >
          not inersted
        </button>
      </div>
    </article>
  );
};
export default TourCard;

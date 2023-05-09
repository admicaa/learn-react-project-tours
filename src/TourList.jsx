import TourCard from "./TourCard";

const TourList = ({ tours, removeTours, refetchAll }) => {
  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="title-underline"></div>
        </div>
        {!tours.length && (
          <main>
            <div className="title">
              <h2>No Tours To Display </h2>
              <button
                className="btn btn-block"
                style={{ marginTop: "2rem" }}
                onClick={refetchAll}
              >
                Refetch All Tours
              </button>
            </div>
          </main>
        )}
        <div className="tours">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} removeTours={removeTours} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default TourList;

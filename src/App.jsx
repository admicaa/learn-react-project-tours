const url = "https://course-api.com/react-tours-project";
import { useEffect, useState } from "react";
import TourList from "./TourList";
import Loading from "./Loading";
const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setTours(data);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (isError) {
    return <h1>Something Went Wrong</h1>;
  }
  return (
    <section>
      {!isLoading ? (
        <TourList
          tours={tours}
          removeTours={removeTours}
          refetchAll={fetchTours}
        />
      ) : (
        <main>
          <Loading />
        </main>
      )}
    </section>
  );
};
export default App;

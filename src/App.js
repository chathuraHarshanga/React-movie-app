import "./App.css";
import { useEffect, useState } from "react";

//import components
import Movie from "./components/Movie";
import Filter from "./components/Filter";

function App() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8c5b5e30e504139fd6699ba73c13557e&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
  };

  return (
    <div className="App">
      <Filter />
      <div className="popular-movies">
        {popular.map((movie) => {
          console.log(movie);
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;

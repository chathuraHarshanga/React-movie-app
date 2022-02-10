import "./App.css";
import { useEffect, useState } from "react";

//import components
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import NavBar from "./components/navBar";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8c5b5e30e504139fd6699ba73c13557e&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="content-body">
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <motion.div layout className="popular-movies">
          <AnimatePresence>
            {filtered.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default App;

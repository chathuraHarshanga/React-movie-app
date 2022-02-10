function movie({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
    </div>
  );
}

export default movie;

import { useLoaderData } from "react-router-dom";
import Card from "./Components/Card";

export default function Movie() {
  const moviesData = useLoaderData();
  const movies = moviesData.Search;
  console.log(moviesData);

  return (
    <ul className="flex flex-wrap justify-center items-center gap-4 py-10">
      {movies?.map((curMovies) => {
        return (
          <Card
            key={curMovies.imdbID}
            image={curMovies.Poster}
            title={curMovies.Title}
            type={curMovies.Type}
            Year={curMovies.Year}
          />
        );
      })}
    </ul>
  );
}

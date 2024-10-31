import React, { useState, useEffect } from "react";
import axios from "axios";

interface Actor {
  _id: string;
  name: string;
}

interface Film {
  _id: string;
  title: string;
  releaseYear: number;
  actors: Actor[];
}

const FilmList: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/films");
      setFilms(response.data);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  return (
    <div>
      <h2>Films</h2>
      <ul>
        {films.map((film) => (
          <li key={film._id}>
            {film.title} ({film.releaseYear})
            <ul>
              {film.actors.map((actor) => (
                <li key={actor._id}>{actor.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;

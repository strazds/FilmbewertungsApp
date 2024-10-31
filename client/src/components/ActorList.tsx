import React, { useState, useEffect } from "react";
import axios from "axios";

interface Actor {
  _id: string;
  name: string;
  birthDate: string;
}

const ActorList: React.FC = () => {
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/actors");
      setActors(response.data);
    } catch (error) {
      console.error("Error fetching actors:", error);
    }
  };

  return (
    <div>
      <h2>Actors</h2>
      <ul>
        {actors.map((actor) => (
          <li key={actor._id}>
            {actor.name} - {new Date(actor.birthDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorList;

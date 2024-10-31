import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ActorList from "./components/ActorList.tsx";
import FilmList from "./components/FilmList.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/actors">Actors</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/actors" element={<ActorList />} />
          <Route path="/films" element={<FilmList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import { useState } from "react";
import Typewriter from "./games/typewriter.jsx";
import ImageGuessing from "./games/organizeWords.jsx";
import Match from "./games/match.jsx";
import { Link, Route, Routes } from "react-router";
import NavBar from "./components/nav.jsx";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <main className="container mx-auto p-5 flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/match" element={<Match />} />
          <Route path="/organizeWords" element={<ImageGuessing />} />
          <Route path="/typewriter" element={<Typewriter />} />
        </Routes>
      </main>
    </div>
  );
}

function MainPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center space-y-5">
      <Link to="/match">
        <button className="btn">Match</button>
      </Link>
      <Link to="/organizeWords">
        <button className="btn">Organize Words</button>
      </Link>
      <Link to="/typewriter">
        <button className="btn">Type Writer</button>
      </Link>
    </div>
  );
}

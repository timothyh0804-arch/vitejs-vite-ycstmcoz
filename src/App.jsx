import { useState } from "react";
import Typewriter from "./games/typewriter.jsx";
import ImageGuessing from "./games/organizeWords.jsx";
import Match from "./games/match.jsx";
import { Link, Route, Routes } from "react-router";
import NavBar from "./components/nav.jsx";

export default function App() {
  let [pt, setPt] = useState(10);

  return (
    <div className="h-screen flex flex-col">
      <NavBar pt={pt} />
      <main className="container mx-auto p-5 flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/match" element={<Match setPt={setPt} />} />
          <Route
            path="/organizeWords"
            element={<ImageGuessing setPt={setPt} />}
          />
          <Route path="/typewriter" element={<Typewriter setPt={setPt} />} />
        </Routes>
      </main>
    </div>
  );
}

function MainPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center space-y-5">
      <h1 className="text-4xl mb-10">🇯🇵 🇰🇷 Start your... 🇩🇪 🇨🇳 </h1>
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

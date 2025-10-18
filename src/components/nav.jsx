import { Link } from "react-router";

export default function NavBar() {
  return (
    <div className="navbar bg-base-300 shadow-sm mb-3">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Learning Language Fluently
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/match">Match</Link>
          </li>
          <li>
            <Link to="/match">Match</Link>
          </li>
          <li>
            <Link to="/match">Match</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

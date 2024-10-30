import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

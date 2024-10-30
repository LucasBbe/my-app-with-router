import { Link, Outlet } from "react-router-dom";

import "./App.css";

const liens = {
  boxShadow: "black 1px 2px 5px",
  margin: "10px",
  textAligns: "center",
  textDecoration: "none",
  padding: "5px",
};

function App() {
  return (
    <>
      <nav>
        <Link style={liens} to="/">
          {" "}
          Home
        </Link>
        <Link style={liens} to="/about">
          {" "}
          About
        </Link>
        <Link style={liens} to="/articles/1">
          {" "}
          Article 1
        </Link>
        <Link style={liens} to="/articles/2">
          {" "}
          Article 2
        </Link>
        <Link style={liens} to="/articles/3">
          {" "}
          Article 3
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

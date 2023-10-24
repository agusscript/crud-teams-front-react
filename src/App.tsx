import { Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Crud Teams";
  }, []);

  return (
    <>
      <header>
        <h1>Crud teams</h1>
      </header>
      <main>
        <Link to="/teams">
          <button className="main-btn">View Teams</button>
        </Link>
        <Link to="/teams/add">
          <button className="main-btn">Add Team</button>
        </Link>
      </main>
    </>
  );
}

export default App;

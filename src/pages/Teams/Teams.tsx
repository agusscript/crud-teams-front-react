import "./Teams.scss";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import useFetchTeams from "../../hooks/useFetchTeams";

function Teams(): JSX.Element {
  const { teams, loading } = useFetchTeams();

  return (
    <section className="teams-section">
      <h1>Teams</h1>
      <table className="table-teams">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            teams.map((team) => (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.area.name}</td>
                <td>
                  <div className="table-btn-container">
                    <Link to={"/teams/" + team.id}>
                      <button className="table-btn">View</button>
                    </Link>
                    <Link to={"/teams/edit/" + team.id}>
                      <button className="table-btn">Edit</button>
                    </Link>
                    <button className="table-btn">Delete</button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <Loader />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default Teams;

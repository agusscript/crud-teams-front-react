import "./Teams.scss";
import Team from "../../entities/Team";
import teamsData from "../../../data/teams.json";

function Teams() {
  const teams: Team[] = teamsData;

  return (
    <>
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
            {teams.map((team) => (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.area.name}</td>
                <td>
                  <div className="table-btn-container">
                    <button className="table-btn">View</button>
                    <button className="table-btn">Edit</button>
                    <button className="table-btn">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Teams;

import "./Teams.scss";
import Team from "../../entities/Team";
import get from "../../utils/httpClient";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Teams(): JSX.Element {
  const [teams, setTeams] = useState([] as Team[]);
  const [loading, setLoading] = useState(true);

  function renderTeams(): JSX.Element {
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

  async function fetchTeams(): Promise<void> {
    setLoading(true);

    try {
      const response = await get("/teams");
      const teamsData = response.data as Team[];
      setTeams(teamsData);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  return renderTeams();
}

export default Teams;

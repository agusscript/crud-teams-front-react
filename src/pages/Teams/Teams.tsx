import "./Teams.scss";
import useFetchTeams from "../../hooks/useFetchTeams";
import Loader from "../../components/Loader/Loader";
import Team from "../../entities/Team";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Teams(): JSX.Element {
  const { teams, loading } = useFetchTeams();
  const [modal, setModal] = useState({
    show: false,
    team: {} as Team | null,
  });

  function handleClick(team: Team) {
    setModal({
      show: true,
      team: team,
    });
  }

  useEffect(() => {
    document.title = "Teams";
  }, []);

  return (
    <section className="teams-section">
      <Link to={"/"} replace={true}>
        <h1>Teams</h1>
      </Link>
      <p className="teams-amount">
        <span className="teams-amount-number">{teams.length}</span> teams
      </p>
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
                      <button
                        id="view-team"
                        className="table-btn"
                      >
                        View
                      </button>
                    </Link>
                    <Link to={"/teams/edit/" + team.id}>
                      <button
                        id="edit-team"
                        className="table-btn"
                        data-name={"edit " + team.name}
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      id="delete-team"
                      className="table-btn"
                      onClick={() => handleClick(team)}
                    >
                      Delete
                    </button>
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
      <Link to="/teams/add">
        <button id="add-new-team" className={`main-btn ${loading && "hide"}`}>
          Add New Team
        </button>
      </Link>
      <ModalDelete show={modal.show} team={modal.team} setShow={setModal} />
    </section>
  );
}

export default Teams;

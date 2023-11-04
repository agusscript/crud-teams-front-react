import "./ModalDelete.scss";
import Team from "../../entities/Team";
import { send } from "../../services/api";

type ModalDeleteProps = {
  show: boolean;
  team: Team | null;
  setShow: React.Dispatch<React.SetStateAction<{ show: boolean; team: Team | null }>>;
  setUpdateTeams: React.Dispatch<React.SetStateAction<boolean>>;
};

function ModalDelete({ show, team, setShow, setUpdateTeams }: ModalDeleteProps) {
  function handleDelete(team: Team) {
    send("DELETE", "/teams/" + team.id, {} as Team);
    setShow({ show: false, team: null });
    setUpdateTeams((prev) => !prev);
  }

  return (
    <section className={`modal-delete ${show ? "show" : "hide"}`}>
      <h2>Delete Team</h2>
      <p className="modal-delete-team">{team?.name}</p>
      <p>Are you sure you want to delete this team?</p>
      <div className="modal-delete-btn-container">
        <button
          id="confirm-delete"
          className="table-btn"
          onClick={() => handleDelete(team as Team)}
        >
          Yes
        </button>
        <button
          id="cancel-delete"
          className="table-btn"
          onClick={() => setShow({ show: false, team: null })}
        >
          No
        </button>
      </div>
    </section>
  );
}

export default ModalDelete;

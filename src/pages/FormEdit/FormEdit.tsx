import "./FormEdit.scss";
import Loader from "../../components/Loader/Loader";
import Form from "../../components/Form/Form";
import Team from "../../entities/Team";
import { sendTeam } from "../../services/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchTeamDetails from "../../hooks/useFetchTeamDetails";

function FormEdit(): JSX.Element {
  const { teamId } = useParams();
  const { loading, teamDetails } = useFetchTeamDetails();
  const [newTeamDetails, setNewTeamDetails] = useState({} as Team);
  const navigate = useNavigate();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNewTeamDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  }

  function mergeTeamDetails(): Team {
    const updatedTeam = { ...teamDetails, ...newTeamDetails };

    if (Object.prototype.hasOwnProperty.call(updatedTeam, "country")) {
      updatedTeam.area.name = updatedTeam.country!;
      delete updatedTeam.country;
    }

    return updatedTeam;
  }

  async function handleSubmit(): Promise<void> {
    const newTeam = mergeTeamDetails();
    const updatedTeamRequest = await sendTeam("PATCH", "/teams/" + teamId, newTeam);

    if (updatedTeamRequest?.status != "ERROR") {
      alert("Team updated successfully");
    } else {
      alert("An error occurred while updating the team");
    }

    navigate("/teams");
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.title = "Edit Team";
  }, []);

  return (
    <section className="form-edit-section">
      <h1>Edit Team</h1>
      {!loading ? (
        <Form
          typeForm="Edit"
          teamData={teamDetails}
          onSubmit={handleSubmit}
          onChange={handleOnChange}
        />
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default FormEdit;

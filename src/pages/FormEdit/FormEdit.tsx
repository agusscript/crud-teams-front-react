import "./FormEdit.scss";
import Loader from "../../components/Loader/Loader";
import Form from "../../components/Form/Form";
import Team from "../../entities/Team";
import { get, send } from "../../services/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FormEdit(): JSX.Element {
  const { teamId } = useParams();
  const [loading, setLoading] = useState(true);
  const [prevTeamDetails, setPrevTeamDetails] = useState({} as Team);
  const [newTeamDetails, setNewTeamDetails] = useState({} as Team);
  const navigate = useNavigate();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNewTeamDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  }

  function mergeTeamDetails(): Team {
    const updatedTeam = { ...prevTeamDetails, ...newTeamDetails };

    if (Object.prototype.hasOwnProperty.call(updatedTeam, "country")) {
      updatedTeam.area.name = updatedTeam.country!;
      delete updatedTeam.country;
    }

    return updatedTeam;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const newTeam = mergeTeamDetails();
    send("PATCH", "/teams/" + teamId, newTeam);
    navigate("/teams");
  }

  async function fetchTeamDetails(): Promise<void> {
    setLoading(true);

    try {
      const response = await get(`/teams/${teamId}`);
      const teamData = response.data as Team;
      setPrevTeamDetails(teamData);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchTeamDetails();
  }, []);

  return (
    <section className="form-edit-section">
      <h1>Edit Team</h1>
      {!loading ? (
        <Form
          typeForm="Edit"
          teamData={prevTeamDetails}
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

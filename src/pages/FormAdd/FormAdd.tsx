import "./FormAdd.scss";
import Form from "../../components/Form/Form";
import Team from "../../entities/Team";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { send } from "../../services/api";

function FormAdd(): JSX.Element {
  const navigate = useNavigate();
  const [teamDetails, setTeamDetails] = useState({} as Team);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const newTeamRequest = await send("POST", "/teams", teamDetails);

    if (newTeamRequest?.status != "ERROR") {
      alert("Team added successfully");
    } else {
      alert("An error occurred while adding the team");
    }

    navigate("/");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTeamDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.title = "Add Team";
  }, []);

  return (
    <section className="form-add-section">
      <h1>Add Team</h1>
      <Form
        typeForm="Add"
        teamData={null}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </section>
  );
}

export default FormAdd;

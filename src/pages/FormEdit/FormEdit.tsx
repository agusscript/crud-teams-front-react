import "./FormEdit.scss";
import Form from "../../components/Form/Form";
import Team from "../../entities/Team";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import get from "../../utils/httpClient";

function FormEdit() {
  const { teamId } = useParams();
  const [loading, setLoading] = useState(true);
  const [teamDetails, setTeamDetails] = useState({} as Team);

  function renderForm() {
    return (
      <section className="form-edit-section">
        <h1>Edit Team</h1>
        {!loading ? (
          <Form
            action="http://localhost:8080/teams"
            method="PATCH"
            typeForm="Edit"
            teamData={teamDetails}
          />
        ) : (
          <Loader />
        )}
      </section>
    );
  }

  async function fetchTeamDetails(): Promise<void> {
    setLoading(true);

    try {
      const response = await get(`/teams/${teamId}`);
      const teamData = response.data as Team;
      setTeamDetails(teamData);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchTeamDetails();
  }, []);

  return renderForm();
}

export default FormEdit;

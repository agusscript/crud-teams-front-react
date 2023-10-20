import "./TeamDetails.scss";
import Team from "../../entities/Team";
import get from "../../utils/httpClient";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TeamDetails(): JSX.Element {
  const { teamId } = useParams();
  const [loading, setLoading] = useState(true);
  const [teamDetails, setTeamDetails] = useState({} as Team);

  const imgPlaceholder =
    "https://raw.githubusercontent.com/agusscript/crud-teams-frontend/main/public/no-img-placeholder.jpg";

  function renderTeamDetails() {
    return (
      <section className="team-details">
        {!loading ? (
          <div>
            <h1>TeamDetails</h1>
            <h2>{teamDetails.name}</h2>
            <img
              src={teamDetails.crestUrl}
              alt={teamDetails.name}
              onError={(e) => {
                e.currentTarget.src = imgPlaceholder;
              }}
            />
            <p>{teamDetails.tla}</p>
            <p>{teamDetails.area.name}</p>
            <p>{teamDetails.address}</p>
            <p>{teamDetails.venue}</p>
            <p>{teamDetails.founded}</p>
            <p>{teamDetails.email}</p>
            <p>{teamDetails.website}</p>
          </div>
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

  return renderTeamDetails();
}

export default TeamDetails;

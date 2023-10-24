import "./TeamDetails.scss";
import Loader from "../../components/Loader/Loader";
import useFetchTeamDetails from "../../hooks/useFetchTeamDetails";
import { useEffect } from "react";

function TeamDetails(): JSX.Element {
  const { loading, teamDetails } = useFetchTeamDetails();

  const imgPlaceholder =
    "https://raw.githubusercontent.com/agusscript/crud-teams-frontend/main/public/no-img-placeholder.jpg";

  useEffect(() => {
    document.title = teamDetails.name;
  }, [teamDetails]);

  return (
    <section className="team-details">
      {!loading ? (
        <div>
          <h1>Team Details</h1>
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

export default TeamDetails;

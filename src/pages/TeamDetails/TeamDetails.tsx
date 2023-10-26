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
          <p>Stadium {teamDetails.venue}</p>
          <p>Founded in {teamDetails.founded}</p>
          <p>Colors: {teamDetails.clubColors}</p>
          <p>Email: {teamDetails.email}</p>
          <p>Website: {teamDetails.website}</p>
          <p>Phone: {teamDetails.phone}</p>
          <p>Last Updated: {teamDetails.lastUpdated}</p>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default TeamDetails;

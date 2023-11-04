import "./TeamDetails.scss";
import Loader from "../../components/Loader/Loader";
import getImgPlaceholder from "../../services/getImgPlaceholder";
import useFetchTeamDetails from "../../hooks/useFetchTeamDetails";
import { useEffect } from "react";

function TeamDetails(): JSX.Element {
  const { loading, teamDetails } = useFetchTeamDetails();
  const imagePlaceholder = getImgPlaceholder();

  useEffect(() => {
    document.title = teamDetails.name;
  }, [teamDetails]);

  return (
    <section className="team-details-section">
      {!loading ? (
        <div>
          <h1>Team Details</h1>
          <h2 className="team-name" data-name={teamDetails.name}>
            {teamDetails.name}
          </h2>
          <img
            className="team-image"
            src={teamDetails.crestUrl}
            alt={teamDetails.name}
            onError={(e) => {
              e.currentTarget.src = imagePlaceholder;
            }}
          />
          <p className="team-tla">{teamDetails.tla}</p>
          <p className="team-country">{teamDetails.area.name}</p>
          <p>{teamDetails.address}</p>
          <p className="team-venue">Stadium {teamDetails.venue}</p>
          <p className="team-founded">Founded in {teamDetails.founded}</p>
          <p className="team-colors">Colors: {teamDetails.clubColors}</p>
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

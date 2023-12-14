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
        <div className="details-wrapper">
          <h1 className="team-name" data-name={teamDetails.name}>
            {teamDetails.name}
          </h1>
          <img
            className="team-image"
            src={teamDetails.crestUrl ? teamDetails.crestUrl : imagePlaceholder}
            alt={teamDetails.name}
            onError={(e) => {
              e.currentTarget.src = imagePlaceholder;
            }}
          />
          <p className="team-tla">
            <span className="label-detail">Abbreviation</span>
            {teamDetails.tla}
          </p>
          <p className="team-country">
            <span className="label-detail">Area</span>
            {teamDetails.area.name}
          </p>
          <p className="team-address">
            <span className="label-detail">Address</span>
            {teamDetails.address}
          </p>
          <p className="team-venue">
            <span className="label-detail">Stadium</span> {teamDetails.venue}
          </p>
          <p className="team-founded">
            <span className="label-detail">Founded in</span> {teamDetails.founded}
          </p>
          <p className="team-colors">
            <span className="label-detail">Colors</span>
            {teamDetails.clubColors}
          </p>
          <p className="team-email">
            <span className="label-detail">Email</span> {teamDetails.email}
          </p>
          <p className="team-website">
            <span className="label-detail">Website</span>{" "}
            <a href={teamDetails.website} target="_blank">{teamDetails.website}</a>
          </p>
          <p className="team-phone">
            <span className="label-detail">Phone</span> {teamDetails.phone}
          </p>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default TeamDetails;

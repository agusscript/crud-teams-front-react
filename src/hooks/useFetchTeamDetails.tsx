import Team from "../entities/Team";
import { get } from "../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useFetchTeamDetails() {
  const { teamId } = useParams();
  const [loading, setLoading] = useState(true);
  const [teamDetails, setTeamDetails] = useState({} as Team);

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

  return {
    loading,
    teamDetails,
  };
}

export default useFetchTeamDetails;

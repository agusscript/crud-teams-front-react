import Team from "../entities/Team";
import { get } from "../services/api";
import { useState, useEffect } from "react";

function useFetchTeams(): { loading: boolean; teams: Team[] } {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([] as Team[]);

  async function fetchTeams(): Promise<void> {
    setLoading(true);

    try {
      const response = await get("/teams");
      const teamsData = response.data as Team[];
      setTeams(teamsData);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  return {
    loading,
    teams,
  };
}

export default useFetchTeams;

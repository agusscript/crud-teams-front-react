import Team from "../entities/Team";
import { get } from "../services/api";
import { useState, useEffect } from "react";

type useFetchTeams = {
  loading: boolean;
  teams: Team[];
  setUpdateTeams: React.Dispatch<React.SetStateAction<boolean>>;
};

function useFetchTeams(): useFetchTeams {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([] as Team[]);
  const [updateTeams, setUpdateTeams] = useState(false);

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
  }, [updateTeams]);

  return {
    loading,
    teams,
    setUpdateTeams,
  };
}

export default useFetchTeams;

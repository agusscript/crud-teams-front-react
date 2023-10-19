import Team from "../entities/Team";

const API = "http://localhost:8080";

type TeamApiResponse = {
  status: string;
  data: Team[];
};

async function get(path: string): Promise<TeamApiResponse> {
  const response = await fetch(API + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  return result;
}

export default get;

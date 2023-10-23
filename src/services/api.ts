import Team from "../entities/Team";

const API = "http://localhost:8080";

type TeamApiResponse = {
  status: string;
  data: Team[] | Team;
};

async function get(path: string): Promise<TeamApiResponse> {
  try {
    const response = await fetch(API + path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function send(
  httpVerb: string,
  path: string,
  bodyData: Team
): Promise<TeamApiResponse> {
  try {
    const response = await fetch(API + path, {
      method: httpVerb,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export { get, send };

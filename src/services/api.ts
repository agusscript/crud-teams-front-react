import Team from "../entities/Team";
import { BACKEND_URL } from "../../env";

const API = BACKEND_URL;

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

async function sendTeam(
  httpVerb: string,
  path: string,
  bodyData: Team
): Promise<TeamApiResponse> {
  const settings = {
    method: httpVerb,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };

  try {
    const response = await fetch(API + path, settings);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function deleteTeam(path: string): Promise<void> {
  try {
    await fetch(API + path, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export { get, sendTeam, deleteTeam };

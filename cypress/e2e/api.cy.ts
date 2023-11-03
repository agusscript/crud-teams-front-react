/// <reference types="Cypress" />

describe("Crud teams api http request tests", () => {
  const URL = "http://localhost:8080";
  let newTeamId;

  it("test create team", () => {
    cy.request("POST", URL + "/teams", { name: "new team", tla: "NT" }).as("createTeam");

    cy.get("@createTeam").should((response: any) => {
      expect(response).to.have.property("status", 201);
      expect(response).to.have.property("statusText", "Created");
      expect(response.body.data).to.have.property("name", "new team");
      expect(response.body.data).to.have.property("tla", "NT");
      newTeamId = response.body.data.id;
    });
  });

  it("test get teams", () => {
    cy.request({
      method: "GET",
      url: URL + "/teams",
    }).as("getTeams");

    cy.get("@getTeams").should((response) => {
      expect(response).to.have.property("status", 200);
      expect(response).to.have.property("statusText", "OK");
    });
  });

  it("test get team details", () => {
    cy.request({
      method: "GET",
      url: URL + "/teams/" + newTeamId,
    }).as("getTeamDetails");

    cy.get("@getTeamDetails").should((response) => {
      expect(response).to.have.property("status", 200);
      expect(response).to.have.property("statusText", "OK");
    });
  });

  it("test update team", () => {
    cy.request("PATCH", `${URL}/teams/${newTeamId}`, {
      name: "updated team",
      tla: "UT",
    }).as("updateTeam");

    cy.get("@updateTeam").should((response: any) => {
      expect(response).to.have.property("status", 200);
      expect(response).to.have.property("statusText", "OK");
      expect(response.body.data).to.have.property("name", "updated team");
      expect(response.body.data).to.have.property("tla", "UT");
    });
  });

  it("test delete team", () => {
    cy.request("DELETE", `${URL}/teams/${newTeamId}`).as("deleteTeam");

    cy.get("@deleteTeam").should((response: any) => {
      expect(response).to.have.property("status", 204);
      expect(response).to.have.property("statusText", "No Content");
    });
  });
});

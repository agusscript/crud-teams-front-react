/// <reference types="Cypress" />
import { FRONTEND_URL } from "../../env";

describe("Crud teams e2e tests", () => {
  before(() => {
    cy.visit(FRONTEND_URL);
  });

  it("Verify that the main page items are showing", () => {
    cy.title().should("eq", "Crud Teams");
    cy.get(".title").should("be.visible");
    cy.get("#view-teams").should("be.visible");
    cy.get("#add-team").should("be.visible");
  });

  let teamsAmountNumber;

  it("Verify that the teams page items are showing", () => {
    cy.get("#view-teams").click();
    cy.title().should("eq", "Teams");
    cy.location("pathname").should("eq", "/teams");
    cy.get(".teams-section").should("be.visible");
    cy.get(".teams-amount").should("be.visible");
    cy.get(".table-teams").should("be.visible");
    cy.get("#add-new-team").should("be.visible");

    cy.get(".teams-amount-number").then((teamsAmount) => {
      teamsAmountNumber = Number(teamsAmount.text());
    });
  });

  it("Verify that the form add page items are showing", () => {
    cy.get("#add-new-team").click();
    cy.title().should("eq", "Add Team");
    cy.location("pathname").should("eq", "/teams/add");
    cy.get(".form-add-section").should("be.visible");
    cy.get(".form").should("be.visible");
  });

  it("Test send add new team form with empty fields", () => {
    cy.get("#name").should("not.have.attr", "placeholder");
    cy.get("#shortName").should("not.have.attr", "placeholder");
    cy.get("#submit-btn").click();
    cy.get("#name").should("have.attr", "placeholder", "This field can't be empty");
    cy.get("#shortName").should("have.attr", "placeholder", "This field can't be empty");
  });

  it("Test send add new team form with filled fields", () => {
    cy.get("#name").type("test name");
    cy.get("#shortName").type("test short name");
    cy.get("#tla").type("test tla");
    cy.get("#country").type("test country");
    cy.get("#founded").type("test founded");
    cy.get("#venue").type("test venue");
    cy.get("#clubColors").type("test clubColors");
    cy.get("#submit-btn").click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("Team added successfully");
    });

    cy.title().should("eq", "Crud Teams");
    cy.location("pathname").should("eq", "/");
  });

  it("Verify that the new team has been added", () => {
    cy.get("#view-teams").click();
    cy.wait(3000);

    cy.get(".teams-amount-number").then((teamsAmount) => {
      const newTeamsAmountNumber = Number(teamsAmount.text());

      if (newTeamsAmountNumber === 0) {
        return;
      }

      expect(newTeamsAmountNumber).to.equal(teamsAmountNumber + 1);
      teamsAmountNumber = newTeamsAmountNumber;
    });
  });

  it("Verify that the form edit page items are showing", () => {
    cy.get("[data-name='edit test name']").first().click();
    cy.title().should("eq", "Edit Team");
    cy.get(".form-edit-section").should("be.visible");
    cy.get(".form").should("be.visible");
  });

  it("Test send edit team form with filled fields", () => {
    cy.get("#name").clear().type("edit test name");
    cy.get("#shortName").clear().type("edit test short name");
    cy.get("#tla").clear().type("edit test tla");
    cy.get("#country").clear().type("edit test country");
    cy.get("#founded").clear().type("edit test founded");
    cy.get("#venue").clear().type("edit test venue");
    cy.get("#clubColors").clear().type("edit test clubColors");
    cy.get("#submit-btn").click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("Team updated successfully");
    });

    cy.title().should("eq", "Teams");
    cy.location("pathname").should("eq", "/teams");
  });

  it("Test delete one team", () => {
    if (teamsAmountNumber === 0) {
      return;
    }

    cy.wait(3000);
    cy.get("#delete-team").first().click();
    cy.wait(3000);
    cy.get("#confirm-delete").first().click();
  });

  it("Verify that the number of teams is correct", () => {
    cy.get(".teams-amount-number").then((teamsAmount) => {
      const newTeamsAmountNumber = Number(teamsAmount.text());

      if (newTeamsAmountNumber === 0) {
        return;
      }

      expect(newTeamsAmountNumber).to.equal(teamsAmountNumber - 1);
      teamsAmountNumber = newTeamsAmountNumber;
    });
  });

  it("Verify that the team details page items are showing", () => {
    cy.wait(3000);
    cy.get("#view-team").first().click();
    cy.get(".team-details-section").should("be.visible");
    cy.get(".team-name").then((name) => {
      cy.title().should("eq", name.text());
    });
    cy.get(".team-image").should("be.visible");
    cy.get(".team-tla").should("be.visible");
    cy.get(".team-country").should("be.visible");
    cy.get(".team-venue").should("be.visible");
    cy.get(".team-founded").should("be.visible");
    cy.get(".team-colors").should("be.visible");
  });
});

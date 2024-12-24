import homePage from "../pages/homePage";

Cypress.Commands.add("loginAs", (email, password) => {
  cy.visit("/");
  homePage.verifyHomePageIsLoaded();
  homePage.navigateToLogin_SignUpPage();
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add("loginAsUser", () => {
  let email = "0c43da93-9af9-43f3-83df-91a5a6d9279cjohndoe@example.com";
  let password = "SecurePassword123";
  cy.visit("/");
  homePage.verifyHomePageIsLoaded();
  homePage.navigateToLogin_SignUpPage();
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add("loginWithSession", (email, password) => {
  cy.session("loginSession", () => {
    cy.visit("/");
    homePage.verifyHomePageIsLoaded();
    homePage.navigateToLogin_SignUpPage();
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
    
  });
});

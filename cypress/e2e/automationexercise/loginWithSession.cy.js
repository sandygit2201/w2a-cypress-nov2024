describe("login with session", () => {
  let email = "0c43da93-9af9-43f3-83df-91a5a6d9279cjohndoe@example.com";
  let password = "SecurePassword123";

  beforeEach("login as user", () => {
    cy.clearAllSessionStorage()
    cy.loginWithSession(email, password);
  });
  it("login and save user session", () => {
    cy.visit("/");
    cy.contains("Logout").filter(":visible").should("be.visible");
  });

  it("verify user home page with session", () => {
    cy.visit("/");
    cy.contains("Logged in as").filter(":visible").should("be.visible");
  });
});

describe("cy.origin example", () => {
  it("origin example", () => {
    cy.viewport("macbook-16");
    cy.visit("https://slack.com/signin#/signin");
    cy.get('[data-qa="base_google_login_button"]').click();
    cy.origin("https://accounts.google.com", () => {
      cy.get("#af-error-container")
        .invoke("text")
        .then((error) => {
          cy.log("Error::" + error);
        });
    });
  });
});

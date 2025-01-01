describe("Focus and Blur", () => {
  it("Focus and Blur", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
    cy.wait(2000);
    cy.task("addLogs", "opened heroku application page");
  });
});

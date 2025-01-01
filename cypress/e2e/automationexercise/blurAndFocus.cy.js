describe("Focus and Blur", () => {
  it("Focus and Blur text box", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.wait(2000);

    cy.get("#username").focus().wait(2000).blur();
  });

  it("Focus and Blur check box", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
    cy.wait(2000);
    cy.screenshot();
    cy.get("#checkboxes input").first().focus().blur();
  });
});

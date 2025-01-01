describe("read file using fixtures", () => {
  it("read login json", () => {
    cy.fixture("login").then((loginDetails) => {
      cy.log("loginDetails::" + JSON.stringify(loginDetails));
      
    });
  });
});

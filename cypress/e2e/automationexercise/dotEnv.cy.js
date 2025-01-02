describe("dotenv", () => {
    it("dotenv sample", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.wait(1000);
  
      cy.get("#username").type(Cypress.env('userName'))
      cy.wait(3000)
    });
  
  });
  
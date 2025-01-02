describe("read env variables cypress", () => {
    it("cypress env example", () => {
      cy.visit("https://the-internet.herokuapp.com/login");
      cy.wait(1000);
      cy.get("#username").type(Cypress.env("userLogin"))
      cy.wait(3000)
    });
  
  });
  
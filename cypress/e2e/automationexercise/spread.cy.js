describe("get all products", () => {
    it("get list of producst in the page", () => {
      let counter = 1;
      cy.visit("https://www.automationexercise.com/products");
     
      cy.getCookies().spread((cookie1, cookie2, cookie3,cookie4) => {
          cy.log(JSON.stringify(cookie1))
          cy.log(JSON.stringify(cookie2))
          cy.log(JSON.stringify(cookie3))
          cy.log(JSON.stringify(cookie4))
      })
  
    });
  });
  
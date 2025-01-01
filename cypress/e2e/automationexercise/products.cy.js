describe("get all products", () => {
  it("get list of producst in the page", () => {
    let counter = 1;
    cy.visit("https://www.automationexercise.com/products");
    cy.get(".productinfo p").each((product) => {
      cy.wrap(product)
        .invoke("text")
        .then((name) => {
          cy.log(`===========${counter}==============`);
          cy.log(name);
          counter += 1;
        });
    });
  });
});

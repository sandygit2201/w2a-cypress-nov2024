describe("read file using fixtures", () => {
  it("read login json", () => {
    cy.fixture("login").as('loginDetails')

    // few lines of code 

    cy.get('@loginDetails').then((loginJson)=>{

        cy.log(JSON.stringify(loginJson))

    })
  });
});

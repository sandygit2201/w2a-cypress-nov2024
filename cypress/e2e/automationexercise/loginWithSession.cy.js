describe("login with session", () => {
  let email = "0c43da93-9af9-43f3-83df-91a5a6d9279cjohndoe@example.com";
  let password = "SecurePassword123";


  before('login as user',()=>{
    cy.loginWithSession(email, password);
    
  })

  beforeEach('visit home page',()=>{

    cy.visit("/");

  })

  it("login and save user session", () => {
    cy.contains("Logout").filter(":visible").should("be.visible");
  });

  it("verify user home page with session", () => {
    cy.contains("Logout").filter(":visible").should("be.visible");
  });
});

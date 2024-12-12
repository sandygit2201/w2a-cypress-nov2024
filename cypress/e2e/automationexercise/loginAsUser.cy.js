import homePage from "../../support/pages/homePage";
import loginPage from "../../support/pages/loginPage";

describe("Login Page Tests", () => {
  it("login as valid user", () => {
    // navigate to base url
    cy.visit("/");
    homePage.verifyHomePageIsLoaded();
    // navigate to login page
    homePage.navigateToLogin_SignUpPage();
    // user login data
    let loginData = {
      username: "c067413e-fb45-4519-ba21-d35447f1b9dfGerman80@gmail.com",
      password: "Passw0rd",
      name: "Will Mohr",
    };
    // enter login details
    loginPage.login(loginData);
    // verify user home page

    // cy.get(".fa-user+b").invoke("text").should("eq", loginData.name);
    cy.wait(10000)
    cy.get(".fa-user+b").should('have.text',  loginData.name)
  });

  it("login with incorrect user details and verify error message", () => {});
});

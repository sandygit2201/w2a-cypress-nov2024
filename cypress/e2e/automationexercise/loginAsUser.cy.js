import homePage from "../../support/pages/homePage";
import loginPage from "../../support/pages/loginPage";

describe("Login Page Tests", { tags: ["sanity"] }, () => {
  it("login as valid user", () => {
    // navigate to base url
    cy.visit("/");
    homePage.verifyHomePageIsLoaded();
    // navigate to login page
    homePage.navigateToLogin_SignUpPage();
    // read data from json file and login
    cy.fixture("login").then((loginData) => {
      cy.log("login Data::" + JSON.stringify(loginData));
      loginPage.login(loginData);
      cy.wait(5000);
      cy.get(".fa-user+b").should("have.text", loginData.name);
    });
  });
});

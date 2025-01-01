import homePage from "../../support/pages/homePage";
import loginPage from "../../support/pages/loginPage";
import productsPage from "../../support/pages/productsPage";

describe("search product", () => {
  it("search for a Product", () => {
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

    homePage.navigateToProductsPage();

    cy.fixture("order/purchaseOrder").then((orderInfo) => {
      productsPage.searchProduct(orderInfo.products[0].name);
      productsPage.clickOnViewProduct();
    });
  });
});

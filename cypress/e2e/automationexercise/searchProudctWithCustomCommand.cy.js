import homePage from "../../support/pages/homePage";
import productsPage from "../../support/pages/productsPage";

describe("search product", () => {
  it("Login with custom command and serach product", () => {
    cy.loginAsUser();
    homePage.navigateToProductsPage();
    cy.fixture("order/purchaseOrder").then((orderInfo) => {
      productsPage.searchProduct(orderInfo.products[0].name);
      productsPage.clickOnViewProduct();
    });
  });
});

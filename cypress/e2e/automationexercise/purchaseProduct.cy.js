import checkoutPage from "../../support/pages/checkoutPage";
import homePage from "../../support/pages/homePage";
import loginPage from "../../support/pages/loginPage";
import paymentPage from "../../support/pages/paymentPage";
import productDetailsPage from "../../support/pages/productDetailsPage";
import productsPage from "../../support/pages/productsPage";
import viewCartPage from "../../support/pages/viewCartPage";

describe("end to end scearnio", () => {
  it("Place an order with a product", () => {
    // visit base url
    cy.visit("/");
    homePage.verifyHomePageIsLoaded();
    // navigate to login page
    homePage.navigateToLogin_SignUpPage();
    // read data from json file and login
    cy.fixture("user").then((loginData) => {
      loginPage.login(loginData);
      cy.wait(5000);
      cy.get(".fa-user+b").should("have.text", loginData.name);
    });

    // navigate to product page
    homePage.navigateToProductsPage();

    // Read purchase order details from fixture and add view product
    cy.fixture("order/purchaseOrder").then((orderInfo) => {
      productsPage.searchProduct(orderInfo.products[0].name);
      productsPage.clickOnViewProduct();
    });

    // verify product info based on ref fixture file
    productDetailsPage.verifyProductInfo("products/SummerWhiteTop.json");

    // update product qty

    cy.fixture("order/purchaseOrder").then((orderInfo) => {
      productDetailsPage.updateProductQuantityAndAddToCart(
        orderInfo.products[0].quantity
      );
      //  Verify popup
      productDetailsPage.clickOnViewCartOnPopup();

      let cartDetails = {
        total:
          "Rs. " + orderInfo.products[0].quantity * orderInfo.products[0].price,
        quantity: orderInfo.products[0].quantity,
      };

      // verify cart details
      viewCartPage.verifyCartDetails(cartDetails);
    });

    // validate billing and delivery address

    //checkout
    viewCartPage.clickOnProceedToCheckout();

    checkoutPage.clickOnPlaceOrder();

    // fill payment details from user.json fixture
    paymentPage.fillPaymentDetail("user.json");

    // verify order conformation
    cy.contains("Congratulations! Your order has been confirmed!").should(
      "be.visible"
    );

    // download invoice

    cy.contains("Download Invoice").click();
  });
});

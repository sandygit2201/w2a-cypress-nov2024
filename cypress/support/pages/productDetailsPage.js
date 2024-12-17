class ProductDetailsPage {
  verifyProductInfo(filePath) {
    cy.fixture(filePath).then((productDetails) => {
      cy.get(".product-information p:first-of-type").should(
        "have.text",
        productDetails.category
      );
    //   cy.get(".product-information p:nth-of-type(2)").should(
    //     "have.text",
    //     productDetails.availability
    //   );
      cy.get(".product-information span span").should(
        "have.text",
        productDetails.price
      );
    });
  }

  updateProductQuantityAndAddToCart(quantity) {
    cy.get("#quantity").clear().type(quantity);
    cy.get("button.cart").click();
    cy.contains("Your product has been added to cart.").should("be.visible");
  }

  clickOnViewCartOnPopup() {
    cy.get('[href="/view_cart"]').last().click();
  }
}

export default new ProductDetailsPage();

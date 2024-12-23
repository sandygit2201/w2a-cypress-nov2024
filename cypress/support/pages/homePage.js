class HomePage {
  verifyHomePageIsLoaded() {
    cy.contains("Signup / Login").should("be.visible");
  }

  navigateToLogin_SignUpPage() {
    cy.contains("Signup / Login").click();
    // verify that login page is loaded
    cy.get('[action="/login"]').should("be.visible");
  }

  navigateToProductsPage(){
    cy.get('[href="/products"]').click()
    cy.contains('All Products').should('be.visible')
  }
}

export default new HomePage();

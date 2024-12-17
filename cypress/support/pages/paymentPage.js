class PaymentPage {
  fillPaymentDetail(filePath) {
    cy.fixture(filePath).then((userInfo) => {
      cy.get('[data-qa="name-on-card"]').type(userInfo.card.name);
      cy.get('[data-qa="card-number"]').type(userInfo.card.cardNumber);
      cy.get('[data-qa="cvc"]').type(userInfo.card.cvc);
      cy.get('[data-qa="expiry-month"]').type(userInfo.card.expiryMonth);
      cy.get('[data-qa="expiry-year"]').type(userInfo.card.expiryYear);
    });

    cy.get('[data-qa="pay-button"]').click();
  }
}

export default new PaymentPage();

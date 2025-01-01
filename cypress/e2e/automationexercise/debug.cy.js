describe("debug test", () => {
  it("debug test", () => {
    cy.visit("https://www.automationexercise.com/contact_us");
    cy.get('[data-qa="name"]').type("asdf");
    cy.get('[data-qa="email"]').type("a@b.com");
    cy.get('[data-qa="subject"]').type("aslkfjowfj slkjfoe ").debug();
    cy.pause();
  });
});

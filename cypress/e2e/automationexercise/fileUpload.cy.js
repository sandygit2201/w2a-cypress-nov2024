describe("File upload", () => {
  it("upload file in contact us", () => {
    cy.visit("https://www.automationexercise.com/contact_us");

    cy.get('[data-qa="name"]').type("abcd");
    cy.get('[data-qa="email"]').type("ab@cd.com");
    cy.get('[data-qa="subject"]').type("test upload");
    cy.get('[data-qa="message"]').type("test message");

    cy.get('[name="upload_file"]').selectFile(
      "cypress/fixtures/uploads/testFileUpload.png"
    );

    cy.get('[data-qa="submit-button"]').click();
  });
});

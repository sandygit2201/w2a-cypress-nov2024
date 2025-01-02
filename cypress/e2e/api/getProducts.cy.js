describe("Get user", () => {
  // Verify Response for a url with API on button click
  it("intercept user response", () => {
    cy.request("https://automationexercise.com/api/productsList").then(
      (response) => {
        cy.log("Reponse::" + JSON.stringify(response));

        expect(response.status).to.eq(200);
      }
    );
  });
});

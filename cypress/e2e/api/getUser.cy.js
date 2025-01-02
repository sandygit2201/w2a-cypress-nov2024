describe("Get user", () => {
  // Verify Response for a url with API on button click
  it("intercept user response", () => {
    cy.visit("https://reqres.in/");

    cy.intercept({
      method: "GET",
      url: "https://reqres.in/api/users/2",
    }).as("getUser");

    cy.get('[data-id="users-single"]').click();

    // cy.wait("@getUser").its("response.statusCode").should("eq", 200);

    cy.wait("@getUser")
      .its("response")
      .then((response) => {
        cy.log("Response Body::" + JSON.stringify(response.body));
      });
  });
});

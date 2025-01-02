describe("Get user", () => {
  // Actual reponse

  // {
  //     "data": {
  //         "id": 2,
  //         "email": "janet.weaver@reqres.in",
  //         "first_name": "Janet",
  //         "last_name": "Weaver",
  //         "avatar": "https://reqres.in/img/faces/2-image.jpg"
  //     },
  //     "support": {
  //         "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
  //         "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
  //     }
  // }

  // Verify Response for a url with API on button click
  it("intercept user response", () => {
    let mockedReponse = {
      data: {
        id: 232024,
        email: "mockedReponse@reqres.in",
        first_name: "w2a",
        last_name: "cypress",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
    };

    cy.intercept("GET", "https://reqres.in/api/users/2", mockedReponse);
    cy.visit("https://reqres.in/");
    cy.intercept("https://reqres.in/api/users/2").as("getUser");
    cy.get('[data-id="users-single"]').click();
    cy.wait("@getUser")
      .its("response")
      .then((response) => {
        cy.log("Response Body::" + JSON.stringify(response.body));
      });
  });
});

import { v4 as uuidv4 } from "uuid";
import loginPage from "../support/pages/loginPage";
import homePage from "../support/pages/homePage";

//  Create user account through API and delete user account from UI 

describe("Create Account API Test", () => {
  it("should create an account successfully", () => {
    let userEmail = uuidv4() + "johndoe@example.com";
    const url = "https://automationexercise.com/api/createAccount";
    const data = {
      name: "John Doe",
      email: userEmail,
      password: "SecurePassword123",
      title: "Mr",
      birth_date: "01",
      birth_month: "01",
      birth_year: "1990",
      firstname: "John",
      lastname: "Doe",
      company: "ExampleCorp",
      address1: "123 Main St",
      address2: "Suite 456",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      zipcode: "90001",
      mobile_number: "1234567890",
    };

    cy.request({
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    }).then((response) => {
      cy.log(JSON.stringify(response));

      cy.log(JSON.stringify(response.body));
    });

    cy.visit("/");
    homePage.verifyHomePageIsLoaded();
    homePage.navigateToLogin_SignUpPage();

    let loginData = {
      email: userEmail,
      password: "SecurePassword123",
    };

    loginPage.login(loginData);

    cy.contains("Delete Account").click();

    cy.contains("Your account has been permanently deleted!").should(
      "be.visible"
    );
  });
});

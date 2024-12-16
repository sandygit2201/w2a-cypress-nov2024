import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import loginPage from "../../support/pages/loginPage";
import signupPage from "../../support/pages/signupPage";

describe("Register for user", () => {
  it("Register new user", () => {

    let newUserData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: uuidv4() + faker.internet.email(),
      password: "Passw0rd",
      dobday: "12",
      dobMonth: "July",
      dobYear: "2013",
      checkSignUp: true,
      company: "abcd",
      country: "Australia",
      address: uuidv4(),
      state: "state 1",
      city: "city 1",
      zipcode: "12345",
      mobile: "1234567890",
    };
    // Login page - Enter new user name and email

    cy.visit("/login");
    cy.contains("New User Signup!").should("be.visible");

    loginPage.signUp(newUserData);
    // Signup page - Enter account info

    signupPage.fillUserInfo(newUserData);

    cy.contains("Account Created!").should("be.visible");

    let loginCredentials = {
      email : newUserData.email,
      password: newUserData.password,
      name : newUserData.firstName + ' ' + newUserData.lastName
    }

    cy.writeFile('cypress/fixtures/login.json',loginCredentials)


  });
});

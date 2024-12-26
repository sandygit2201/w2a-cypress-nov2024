import homePage from "../../support/pages/homePage";
import loginPage from "../../support/pages/loginPage";

describe("blur command", () => {
  it("blur command", () => {
    // navigate to base url
    cy.visit("/");
    homePage.verifyHomePageIsLoaded();
    // navigate to login page
    homePage.navigateToLogin_SignUpPage();
    // read data from json file and login
   cy.get('.fa-home').focus().blur()
   cy.wait(10000)

//    <select id="dropdown">
//     <option value="" disabled="disabled">Please select an option</option>
//     <option value="1">Option 1</option>
//     <option value="2" selected="selected">Option 2</option>
//   </select>

//    Get text of an element  - returns Option 2
   cy.get('#dropdown option').filter('[selected="selected"]').invoke('text') 

//    Get text of an element - retuns 2
cy.get('#dropdown option').filter('[selected="selected"]').invoke('value').should('eq',2)


});
});

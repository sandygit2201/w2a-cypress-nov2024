class loginPage {

    signUp(userData){
        cy.get('[data-qa="signup-name"]').type(userData.firstName + ' ' + userData.lastName);
        cy.get('[data-qa="signup-email"]').type(userData.email);
        cy.get('[data-qa="signup-button"]').click();
    }

    login(userData){
        cy.get('[data-qa="login-email"]').type(userData.username)
        cy.get('[data-qa="login-password"]').type(userData.password)
        cy.get('[data-qa="login-button"]').click()
    }


}

export default new loginPage()
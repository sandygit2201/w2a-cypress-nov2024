class signUp{

    fillUserInfo(userData){

        cy.get('[data-qa="password"]').type(userData.password)
        cy.get('[data-qa="days"]').select(userData.dobday);
        // cy.get('[data-qa="months"]').select(userData.dobMonth);
        cy.get('[data-qa="months"]').type(userData.dobMonth);
        cy.get('[data-qa="years"]').select(userData.dobYear);
    
        if (userData.checkSignUp) cy.get("#newsletter").check();
        cy.get('[data-qa="first_name"]').type(userData.firstName);
        cy.get('[data-qa="last_name"]').type(userData.lastName);
    
        cy.get('[data-qa="country"]').select(userData.country)
        cy.get('[data-qa="address"]').type(userData.address);

        
    
        cy.get('[data-qa="state"]').type(userData.state);
        cy.get('[data-qa="city"]').type(userData.city);
        cy.get('[data-qa="zipcode"]').type(userData.zipcode);
    
        cy.get('[data-qa="mobile_number"]').type(userData.mobile)
    
        cy.get('[data-qa="create-account"]').click();
    }


}

export default new signUp()
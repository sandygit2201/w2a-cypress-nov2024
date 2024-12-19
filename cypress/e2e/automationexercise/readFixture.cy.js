describe('read file using fixtures',()=>{

    it('read login json',()=>{

        cy.fixture('login').then(loginDetails=>{

            cy.log("loginDetails::"+loginDetails)

            cy.log('user email::' + loginDetails.email)

        })


    })

})
describe('Run test with custom commands',()=>{


    it('login with custom command',()=>{

        let email = '0c43da93-9af9-43f3-83df-91a5a6d9279cjohndoe@example.com'
        let password = 'SecurePassword123'

        cy.loginAs(email,password)

        

    })

})
class ViewCartPage{

    verifyCartDetails(cartDetails){

        cy.get('.cart_total_price').should('have.text',cartDetails.total)
    }

    clickOnProceedToCheckout(){
        cy.get('a.check_out').click()
    }

}

export default new ViewCartPage()
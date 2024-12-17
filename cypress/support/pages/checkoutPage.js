class CheckoutPage{

    // wirte code for this
    verifyDeliveryAddress(address){

    }

    // wirte code for this
    verifyBillingAddress(address){

    }

    clickOnPlaceOrder(){
        cy.get('a.check_out').click()
    }

}

export default new CheckoutPage()
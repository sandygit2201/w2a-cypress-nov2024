class ProductsPage{

    searchProduct(productName){

        cy.get('#search_product').type(productName)
        cy.get('#submit_search').click()
    }

    clickOnViewProduct(){
        cy.contains('View Product').filter(':visible').click()
    }




}

export default new ProductsPage()
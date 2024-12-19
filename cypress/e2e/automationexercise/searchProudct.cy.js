describe('search product',()=>{

    cy.visit("/");
    homePage.verifyHomePageIsLoaded();
    // navigate to login page
    homePage.navigateToLogin_SignUpPage();
    // read data from json file and login
    cy.fixture("login").then((loginData) => {
      cy.log('login Data::'+JSON.stringify(loginData))
      loginPage.login(loginData);
      cy.wait(5000);
      cy.get(".fa-user+b").should("have.text", loginData.name);
    });

    homePage.navigateToProductsPage()
    
    cy.fixture('order/purchaseOrder').then((orderInfo)=>{
      productsPage.searchProduct(orderInfo.products[0].name)
      productsPage.clickOnViewProduct()
    })

})
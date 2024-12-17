import checkoutPage from "../../support/pages/checkoutPage";
import homePage from "../../support/pages/homePage";
import loginPage from "../../support/pages/loginPage";
import paymentPage from "../../support/pages/paymentPage";
import productDetailsPage from "../../support/pages/productDetailsPage";
import productsPage from "../../support/pages/productsPage";
import viewCartPage from "../../support/pages/viewCartPage";

describe("end to end scearnio",()=>{

    it("Place an order with a product",()=>{

        cy.visit("/");
        homePage.verifyHomePageIsLoaded()
        // navigate to login page
        homePage.navigateToLogin_SignUpPage();
        // read data from json file and login
        cy.fixture("user").then((loginData) => {
          
          loginPage.login(loginData);
          cy.wait(5000);
          cy.get(".fa-user+b").should("have.text", loginData.name);
        });

        homePage.navigateToProductsPage()
        
        cy.fixture('order/purchaseOrder').then((orderInfo)=>{
          productsPage.searchProduct(orderInfo.products[0].name)
          productsPage.clickOnViewProduct()
        })

        productDetailsPage.verifyProductInfo('products/SummerWhiteTop.json')

        productDetailsPage.updateProductQuantityAndAddToCart('2')

        productDetailsPage.clickOnViewCartOnPopup()

        let cartDetails ={

          total:'Rs. 800',
          quantity:'2'
        }

        viewCartPage.verifyCartDetails(cartDetails)

        viewCartPage.clickOnProceedToCheckout()

        checkoutPage.clickOnPlaceOrder();

        paymentPage.fillPaymentDetail('user.json')

        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')

    })
    
})
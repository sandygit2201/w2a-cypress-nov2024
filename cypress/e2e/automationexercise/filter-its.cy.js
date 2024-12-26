
describe("filter and its example", () => {
  it("filter and its example", () => {
    // navigate to base url
    cy.visit("https://the-internet.herokuapp.com/dropdown");
   
   cy.get('#dropdown option').its('length').should('eq',3)

   cy.get('#dropdown option')
   .filter('[disabled="disabled"]')
   .invoke('text')
   .then((optionText)=>{
        cy.log('Text::'+optionText)
   })
   




});
});

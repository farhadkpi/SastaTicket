require('cypress-xpath')
import Login from '../../support/pomBus/pomlogin';
import Hotel from '../../support/pomBus/pomhotel';

describe('Verify Browser Stack Home Page', function ()  {
   
    it('Sort the hotel from Low to High.', function (){
        const homePage=new Login();
        const hotel=new Hotel()
        homePage.geturl();
        hotel.clickHotelLink()
        hotel.enterCity('karachi')
        cy.get('#react-autowhatever-1--item-0').click()
        hotel.clickHotelSearch()
        cy.wait(3000)
        hotel.assertPrice()
    })
    it('Add one child in same search field', function (){
        cy.viewport(2000,1000)
        const homePage=new Login();
        const hotel=new Hotel()
        homePage.geturl();
        hotel.clickHotelLink()
        hotel.enterCity('Lahore')
        cy.get('#react-autowhatever-1--item-0').click()
        hotel.clickHotelSearch()
        cy.wait(3000)
        hotel.clickTravelers()
        cy.wait(1000)
        hotel.addChild()
        hotel.assertChild()
    })

})

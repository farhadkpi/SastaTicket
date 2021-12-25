require('cypress-xpath')
import Login from '../../support/pomBus/pomlogin';
import Bus from '../../support/pomBus/pombus';
describe('Verify Browser Stack Home Page', function ()  {
   
    beforeEach(function(){
        cy.fixture('data').then(function(data)
        {
            this.data=data ;
        })
        })
    it('Verify the bus without putting inputs', function (){
        const homePage=new Login();
        const bus=new Bus();
        homePage.geturl();
        cy.typeLogin({ email: this.data.Username,password: this.data.Userpwd})
        homePage.submitBtn();
        bus.clickBusNavigation()
        bus.clickSearchButton()
        bus.assertorigin()     
    })

    it('Verify the bus discount price', function (){
        cy.intercept({
            path: '/api/v1/bus/search/'
        }).as('userinfo')
        const homePage=new Login();
        const bus=new Bus();
        homePage.geturl();
        cy.typeLogin({ email: this.data.Username,password: this.data.Userpwd})
        homePage.submitBtn();
        bus.clickBusNavigation()
        bus.clickFromDestination('Karachi{enter}')
        bus.clickToDestination('Lahore{enter}')
        bus.selectCalendar()
        bus.clickSearchButton()
        cy.wait(4000)
        bus.assertbusfare()
    })
    it('Verify the bus check seat available for booking', function (){
        cy.intercept({
            path: '/api/v1/bus/search/'
        }).as('userinfo')
        const homePage=new Login();
        const bus=new Bus();
        homePage.geturl();
        cy.typeLogin({ email: this.data.Username,password: this.data.Userpwd})
        homePage.submitBtn();
        bus.clickBusNavigation()
        bus.clickFromDestination('Karachi{enter}')
        bus.clickToDestination('Lahore{enter}')
        bus.selectCalendar()
        bus.clickSearchButton()
        cy.wait(5000)
        bus.clickreservedseat()
    })

    it('Verify the bus no. being reserved by Male or female', function (){
        cy.intercept({
            path: '/api/v1/bus/search/'
        }).as('userinfo')
        const homePage=new Login();
        const bus=new Bus();
        homePage.geturl();
        cy.typeLogin({ email: this.data.Username,password: this.data.Userpwd})
        homePage.submitBtn();
        bus.clickBusNavigation()
        bus.clickFromDestination('Karachi{enter}')
        bus.clickToDestination('Lahore{enter}')
        bus.selectCalendar()
        bus.clickSearchButton()
        cy.wait(7000)
        bus.clickrandomseat()
        bus.clickreservegender()
    })

    it('Verify the bus depart time from last card', function (){
        cy.intercept({
            path: '/api/v1/bus/search/'
        }).as('userinfo')
        const homePage=new Login();
        const bus=new Bus();
        homePage.geturl();
        cy.typeLogin({ email: this.data.Username,password: this.data.Userpwd})
        homePage.submitBtn();
        bus.clickBusNavigation()
        bus.clickFromDestination('Karachi{enter}')
        bus.clickToDestination('Lahore{enter}')
        bus.selectCalendar()
        bus.clickSearchButton()
        cy.wait(7000)
        bus.clickrandomseat()
        bus.getDeptime()
    })
})

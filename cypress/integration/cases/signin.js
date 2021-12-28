require('cypress-xpath')
import Login from '../../support/pomBus/pomlogin';
import History from '../../support/pomBus/pomhistory';
describe('Verify Browser Stack Home Page', function ()  {
   
    beforeEach(function(){
        cy.fixture('data').then(function(data)
        {
            this.data=data ;
        })
        })

    // it('Verify the credentials in Login form', function (){
    //     cy.intercept({
    //         path: '/api/v3/users/login/'
    //     }).as('userinfo')
    //     const homePage=new Login();
    //     homePage.geturl();
    //     cy.typeLogin({ email: this.data.Username,password: this.data.Userpwd })
    //     homePage.submitBtn();
    //     cy.wait('@userinfo').then((res)=>{
    //         expect(res.response.statusCode).to.equal(200)
    //     })
    // })

    // it('Verify the Purchase history in Login form', function (){
    //     const homePage=new Login();
    //     const history=new History();
    //     homePage.geturl();
    //     cy.typeLogin({ email: this.data.Username,password: this.data.Userpwd })
    //     homePage.submitBtn();
    //     history.getpurchase()
    //     cy.request('/api/v4/orders/?page=1&status=paid').then((response)=>
    //     {
    //       if(response.body.data.count === 0)
    //       {
    //           cy.wait(2000)
    //           cy.get('#wrapper > div.page-holder > div > div.account-body > div > div > h3').contains('No purchases found.')
    //       }
    //       else
    //       {
    //           expect(response.body.data.count).to.be.greaterThan(0)
    //       }
    //    })
    // })

    // it('Verify the Dubai as the Destination', function (){
    //     const homePage=new Login();
    //     homePage.sastaUrl();
    //     homePage.clickDubaiLink()
    //     homePage.assertDubaiFlight()
    //     homePage.assertDateForDubai()
    // })

    // it('Verify the Airline name in list', function (){
    //     const homePage=new Login();
    //     homePage.sastaUrl();
    //     homePage.redirectAirlineLink()
    //     homePage.assertAirline()
    // })
})
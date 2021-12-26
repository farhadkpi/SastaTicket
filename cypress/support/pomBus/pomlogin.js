class Login 
{
  geturl()
  {
    return cy.visit('https://www.sastaticket.pk/air/login');
  }
  
/*
  Username and password is being entered through custom command option
*/  
  sastaUrl()
  {
    return cy.visit('https://www.sastaticket.pk');
  }
  submitBtn(){
    const button= cy.contains("Login")
    button.click()
    }
    clickDubaiLink()
    {
      cy.xpath('(//div[@class="sc-bdVaJa OiqjK"])[5]').click()
      cy.get('body > div.wrapper > div.form-detail > div > div > div > div > div > div:nth-child(1) > a > div > div.bottom-sec > button')
      .click()
    }

    assertDubaiFlight()
    {
      cy.xpath('(//span[@class="city_code"])[2]')
      .invoke('text').then((assertDubai) => {
          expect(assertDubai).to.eq('DXB')
      })
    }
    assertDateForDubai()
    {
      cy.xpath('(//div[@class="date"])[5]')
      .invoke('text').then((assertDate) => {
          cy.xpath('(//div[@class="date"])[5]').click()
          cy.xpath('(//button[@class="sasta-btn select-btn "])[1]').click()
          cy.get('#wrapper > div.page-holder > div > div.trip-row > div.trip-column.content > div > div.content.trip-content > div.trip-holder > div > span')
          .invoke('text').then((Week) => {
            let week = Week.substring(10,16)
            expect(assertDate).to.contains(week)
          })
      })
    }
    assertAirline()
    {
      cy.xpath('(//div[@class="tda-box"])[1]').click()
      for(let i=1;i<=5;i++)
      {
        cy.xpath(`(//p[@class="airline-name-off"])[${i}]`)
        .invoke('text').then((assertAirline) => {
          expect(assertAirline).to.eq('PIA')
        })
      }
    }
    redirectAirlineLink()
    {
      return cy.xpath('(//div[@class="sc-bdVaJa OiqjK"])[5]').click()
    }
}
export default Login
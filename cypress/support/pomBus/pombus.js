class Bus {
  clickBusNavigation() {
      const busNavigate = cy.get('#wrapper > header > div > div > div.sc-bZQynM.huYyLs > div.sc-bdVaJa.sc-dnqmqq.hQuskd > a:nth-child(3) > div')
      busNavigate.click()
  }


  clickSearchButton() {
      const searchButton = cy.get('#wrapper > div.sc-bdVaJa.jMfdRe > div > div > div:nth-child(2) > div.sc-bdVaJa.lmezJf > button')
      searchButton.click()
  }


  clickFromDestination(fromlocation) {
      const fromLocation = cy.get('#wrapper > div.sc-bdVaJa.jMfdRe > div > div > div:nth-child(1) > div.sc-bdVaJa.jAJldd > div > div > div')
      fromLocation.click()
      fromLocation.type(fromlocation)
      return this
  }
  clickToDestination(tolocation) {
      const toLocation = cy.get('#wrapper > div.sc-bdVaJa.jMfdRe > div > div > div:nth-child(1) > div.sc-bdVaJa.dJaiQv > div > div > div')
      toLocation.click()
      toLocation.type(tolocation)
      return this
  }
  selectCalendar() {
      cy.get('#wrapper > div.sc-bdVaJa.jMfdRe > div > div > div:nth-child(2) > div.sc-bdVaJa.cBGrJP > div > div > div > div > input').click()
      cy.wait(2000)
      cy.xpath('(//div[@aria-disabled="false"])')
          .its('length').then((len) => {
              let randd = Math.floor((Math.random() * len) + 1);
              cy.xpath(`(//div[@aria-disabled="false"])[3]`).click()
          })

  }
  clickrandomseat() {
    cy.wait(2000)
      cy.xpath('(//button[@class="sc-bdVaJa sc-cSHVUG bspotd"])[1]')
          .contains('Check Seats').click()
      cy.wait(3000)
      cy.xpath('(//div[@class="sc-bdVaJa kYfgeE"]//div[@x-type="flexbox"][not(@class="sc-bdVaJa jdRrPY")][not(@class="sc-bdVaJa iHUYbp")][contains(@style,"cursor: pointer")])')
          .its('length').then((len) => {
              console.log(len)
              let rand = Math.floor((Math.random() * len));
              cy.wait(1000)
              cy.xpath(`(//div[@class="sc-bdVaJa kYfgeE"]//div[@x-type="flexbox"][not(@class="sc-bdVaJa jdRrPY")][not(@class="sc-bdVaJa iHUYbp")][contains(@style,"cursor: pointer")])[${rand}]`).click()
          })
  }


  clickreservegender() {
    cy.wait(2000)
      cy.xpath('(//div[@class="sc-bdVaJa brJkeo"]//div[@class="sc-bxivhb sc-ifAKCX iuWikR"])')
          .its('length').then((len) => {
              console.log(len)
              let rand1 = Math.floor((Math.random() * len) + 1);
              cy.xpath(`(//div[@class="sc-bdVaJa brJkeo"]//div[@class="sc-bxivhb sc-ifAKCX iuWikR"])[${rand1}]`).click()
              cy.xpath(`(//div[@class="sc-bxivhb sc-ifAKCX jCoCKV"][not(@font-size="1")])[${rand1}]`)
              .invoke('text').then((gender) => {
              cy.xpath('(//div[@x-type="flexbox"][@class="sc-bdVaJa brJkeo"]//div[@class="sc-bdVaJa kCvNRo"]//div[@class="sc-iRbamj crVwhE sc-bdVaJa geBVyB"]//div[@class="sc-bxivhb sc-ifAKCX iuWikR"])[1]')
                  .invoke('text').then((check) => {
                      cy.get('#wrapper > div.sc-bdVaJa.kCvNRo > div > div.sc-bdVaJa.fyQZSD > div.sc-bdVaJa.jMhOdN > div:nth-child(3) > div.ReactCollapse--collapse > div > div > div.sc-bdVaJa.biYZFf > div > div.sc-bdVaJa.cqjUiR > div.sc-bdVaJa.kVxaln > div.sc-bdVaJa.TuEtK > div > div')
                          .invoke('text').then((check2) => {
                              expect(check+gender).to.contain(check2)
                          })
                  })
                })
          })
  }


  clickreservedseat() {
      return cy.wait(2000)
          .xpath('(//button[@class="sc-bdVaJa sc-cSHVUG bspotd"])[1]').contains('Check Seats').click()
          .xpath('(//div[@class="sc-bdVaJa kYfgeE"]//div[@x-type="flexbox"][not(@class="sc-bdVaJa jdRrPY")][(@class="sc-iRbamj crVwhE sc-bdVaJa geBVyB")][contains(@style,"background-color: rgb(0, 111, 174);")])')
          .its('length').then((len) => {
              console.log(len)
              let rand1 = Math.floor((Math.random() * len) + 1);
              cy.wait(2000)
              cy.xpath(`(//div[@class="sc-bdVaJa kYfgeE"]//div[@x-type="flexbox"][not(@class="sc-bdVaJa jdRrPY")][(@class="sc-iRbamj crVwhE sc-bdVaJa geBVyB")][contains(@style,"background-color: rgb(0, 111, 174);")])[${rand1}]`)
                  .should('have.css', 'background-color', 'rgb(0, 111, 174)')
          })
  }


  assertbusfare() {
    cy.wait(2000)
      cy.get('#wrapper > div.sc-bdVaJa.kCvNRo > div > div.sc-bdVaJa.fyQZSD > div.sc-bdVaJa.jMhOdN > div:nth-child(3) > div > div.sc-bdVaJa.jqCuqa > h2')
          .invoke('text').then((check) => {
              cy.wait('@userinfo').then((res) => {
                  expect('Rs. ' + res.response.body.data.buses[0].price.selling_fare).to.eq(check.replace(/,/g, ""))
              })
          })
  }


  assertfilterbar() {
    cy.wait(2000)
      cy.xpath('/html/body/div[1]/div[2]/div[1]/div/div[4]/div[1]/div/div[2]/div/div[3]/div/div/div[4]')
          .invoke('attr', 'style', 'left: 50%; right: auto; transform: translateX(-50%);')
          .invoke('attr', 'aria-valuenow', '50')
          .trigger('change')
  }


  assertorigin() {
    cy.wait(2000)
      cy.get('.Toastify').find('.Toastify__toast-body').invoke('text').then((check) => {
          expect(check).to.eq('Please select origin.')
      })
  }

  getDeptime() {
      cy.wait(2000)
      cy.get('#wrapper > div.sc-bdVaJa.kCvNRo > div > div.sc-bdVaJa.fyQZSD > div.sc-bdVaJa.jMhOdN > div:nth-child(3) > div > div.sc-bdVaJa.heviWS > div.sc-bdVaJa.eCpvEl > div:nth-child(1) > label.sc-bxivhb.sc-ifAKCX.dewvAZ')
          .invoke('text').then((time) => {
              cy.get('#wrapper > div.sc-bdVaJa.kCvNRo > div > div.sc-bdVaJa.fyQZSD > div.sc-bdVaJa.jMhOdN > div:nth-child(3) > div.ReactCollapse--collapse > div > div > div.sc-bdVaJa.biYZFf > div > div:nth-child(3) > div.sc-bxivhb.sc-ifAKCX.kwDFMv')
                  .invoke('text').then((assertTime) => {
                      expect(assertTime).to.eq(time)
                  })
          })
  }
}

export default Bus
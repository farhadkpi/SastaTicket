class Hotel {
    clickHotelLink() {
        return cy.wait(1000)
            .get('#wrapper > header > div > div > div.sc-bZQynM.huYyLs > div.sc-bdVaJa.sc-dnqmqq.hQuskd > a:nth-child(2) > div > div').click()
    }
    enterCity(city) {
        const cityName = cy.xpath('//*[@id="Going to"]')
        cityName.click()
        cityName.type(city)
        return this
    }
    clickHotelSearch() {
        return cy.wait(2000)
            .get('#wrapper > div:nth-child(2) > div.hotel-search-holder > div > div > form > div.search-button-wrapper > button')
            .click()
    }
    clickTravelers() {
        return cy.wait(2000)
            .xpath('//*[@id="wrapper"]/div[1]/div[1]/div[2]/form/div[1]/div[2]/div[2]/div/span/span')
            .click({
                force: true
            })
    }
    addChild() {
        return cy.wait(2000)
            .xpath('//*[@id="wrapper"]/div[1]/div[1]/div[2]/form/div[1]/div[2]/div[2]/div[3]/div/div/div/div[3]/div[2]/button[2]/label').click()
            .get('select').select('10')
            .xpath('//*[@id="wrapper"]/div[1]/div[1]/div[2]/form/div[2]/button').click()
    }
    assertChild() {
        return cy.wait(2000)
            .xpath('//span[@class="guest-details"]').invoke('text').then(child => {
                expect(child).to.contain('Child')
            })
    }

    assertPrice() {
        let arr = []
        let i;
        var highest = []
        cy.wait(2000)
        cy.xpath('(//div[@class="original-price"]//ins//span)')
            .its('length').then((len) => {
                for (i = 1; i < len; i++) {
                    cy.xpath(`(//div[@class="original-price"]//ins//span)[${i}]`).invoke('text').then(price => {
                        let p = price.replace('Rs. ', '')
                        p = p.replace(',', '')
                        arr.push(p)
                        highest = arr
                        //console.log(highest[i])
                        highest[0] = Math.min(...highest)
                    })
                }
                cy.xpath('(//button[@class="sort-button"])[1]').click({
                    multiple: true
                })
                cy.xpath('(//input[@type])[29]').click()
                cy.wait(2000)
                cy.xpath('(//div[@class="original-price"]//ins/span)[1]').invoke('text').then(pric => {
                    expect(pric.replace(',', '')).to.eq('Rs. ' + highest[0])

                })

            })

    }
}
export default Hotel
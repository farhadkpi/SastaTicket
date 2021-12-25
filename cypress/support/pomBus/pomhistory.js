class history 
{
    getpurchase()
    {
       const button= cy.get("#wrapper > div.page-holder > div > div.account-sidebar > ul > li:nth-child(2) > a")
       button.click()
    }
}
export default history
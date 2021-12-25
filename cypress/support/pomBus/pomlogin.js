class Login 
{
  geturl()
  {
    return cy.visit('https://www.sastaticket.pk/air/login');
  }
  
/*
  Username and password is being entered through custom command option
*/  
  submitBtn(){
    const button= cy.contains("Login")
    button.click()
    }
}
export default Login
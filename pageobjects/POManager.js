const {DashboardPage}= require('./DashboardPage');
const {LoginPage} = require('./LoginPage');
class POManager
{
  constructor(page)
  { 
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
  }
 get loginPage()
 {
  return this.loginPage;
 }
 get DashboardPage()
 {
  return this.dashboardPage;
 }
}
module.exports= {POManager};
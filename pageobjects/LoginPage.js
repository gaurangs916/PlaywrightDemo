class LoginPage{   // class
  constructor(page)
  {
    this.page = page;
    this.SignInButton = page.locator("[value='Login']");
    this.userName = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
  }
  
  async goTo()
  {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }

  async validLogin(username, password)  //method
  {
   await this.userName.fill(username);
   await this.password.fill("Iamking@000");
   await this.SignInButton.click();
   await this.page.waitForLoadState('networkidle');
  }
}
module.exports={LoginPage};
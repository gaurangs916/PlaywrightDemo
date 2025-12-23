const {test, expect} =require('@playwright/test')
exports.homepage = 
class homepage{
 constructor(page){
  this.page=page;
  this.headers="//ul[@id='menu-primary-items']//li";
  this.heading=page.locator("//h1[@class='post-title']");

 }
  async checkHeaders() {
    const headeroptions= await this.page.$$(this.headers);
    for(const h of headeroptions)
      { 
    console.log(await h.textContent());
      }
    }

 async checkHeading(expectedtext) {
     await expect(this.heading).toHaveText(expectedtext);
    }


}

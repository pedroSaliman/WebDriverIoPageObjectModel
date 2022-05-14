const Page = require("../pages/page");
class Home extends Page{

get selectcurrency(){return $("#customerCurrency")}
get searchinput(){return $("#small-searchterms")}
get searchbtn(){return $("button[type='submit']")}
get contact(){return $("a[href='/contactus']")}
get reg(){return $(".ico-register")}
get hover(){return $("//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']")}
get desktop(){return $("//ul[@class='top-menu notmobile']//a[normalize-space()='Desktops']")}
get desktopmessage(){return $("div[class='page-title'] h1")}

async moveto(){
    await this.hover.moveTo();
    await this.desktop.click();
}
async clicktoregister(){
    await this.reg.click();
}

async contactclick()
{
    this.contact.toBeDisplayed();
    await  this.contact.click();
}

async search(productname){
    this.searchinput.toBeDisplayed();
    await this.searchinput.setValue(productname);
     this.searchbtn.toBeDisplayed();
     await this.searchbtn.click();

}


async changecuurency(thenumber){
    this.selectcurrency.toBeDisplayed();
    await this.selectcurrency.selectByIndex(thenumber);
}

open(){
    return super.open();
}








}
module.exports=new Home();
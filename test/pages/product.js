class Product{

get laplink(){return $("h2[class='product-title'] a")}
get wishbutton(){return $("#add-to-wishlist-button-4")}
get wishlink(){return $("p[class='content'] a")}
get compare(){return $("div[class='compare-products'] button[type='button']")}

async clickcompare()
{
    await this.compare.click();
    await this.wishlink.click();
}

async laptoplink(){
    await this.laplink.click();
}
async wishlist(){
    
    await this.wishbutton.click();
   await this.wishlink.click();
}













}module.exports=new Product();
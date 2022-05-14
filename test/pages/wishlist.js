class Wishlist{

get wishtxt(){return $("div[class='page-title'] h1")}
get quantity(){return $("input.qty-input")}
get updatebutton(){return $("#updatecart")}



async wishinfo(value){
    await this.quantity.setValue(value);
    await this.updatebutton.click();
}








}module.exports=new Wishlist();
class Compare{

get clear(){return $(".clear-list")}
get txt(){return $(".no-data")}

async clicktoclearcompare(){
    await this.clear.click();
}




}module.exports=new Compare();
class Contact{

get username(){return $("#FullName")}
get email(){return $("#Email")}
get message(){return $("#Enquiry")}
get contactbtn(){return $("button[name='send-email']")}
get result(){return $(".result")}



async contactinfo(theusername,theemail,themessage){
    await this.username.setValue(theusername);
    await this.email.setValue(theemail);
    await this.message.setValue(themessage);
    await this.contactbtn.click();
    
}
async theresult(){
   await  this.result.getText();
}




}
module.exports=new Contact();
class Register{

    get gender(){return $("#gender-male")}
    get fname(){return $("#FirstName")}
    get lname(){return $("#LastName")}
    get email(){return $("#Email")}
    get pass(){return $("#Password")}
    get conpass(){return $("#ConfirmPassword")}
    get txt(){return $(".result")}
    get btn(){return $("#register-button")}


async reginfo(firstname,lastname,theemail,thepass,theconpass){
    await this.gender.click();
    await this.fname.setValue(firstname);
    await this.lname.setValue(lastname);
    await this.email.setValue(theemail);
    await this.pass.setValue(thepass);
    await this.conpass.setValue(theconpass);
    await this.btn.click();
}










}module.exports=new Register();
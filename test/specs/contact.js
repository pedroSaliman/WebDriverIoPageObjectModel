const Home=require("../pages/home")
const Contact=require("../pages/contact")
const data= require("../testdata/data")

describe('the contactcase', () => {
    it("case",async()=>{
       await Home.open();
       await Home.contactclick();
       await Contact.contactinfo(data.thueusername,data.theemail,data.themessage)
       await expect(Contact.result).toBeExisting();
       await expect(Contact.result).toHaveTextContaining("successfully sent to the store owner");
       
    })
});
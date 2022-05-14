 const Home = require("../pages/home")
const data= require("../testdata/data")

const Register = require("../pages/resgister")
describe('register case', () => {
    it("case",async()=>{

        Home.open();
        Home.clicktoregister();
        await Register.reginfo(data.fname,data.laname,data.email,data.pass1,data.pass2)
        await expect(Register.txt).toBeExisting();
        await expect(Register.txt).toHaveTextContaining("registration");
    })
});
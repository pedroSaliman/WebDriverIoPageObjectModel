const Home=require("../pages/home")
const data= require("../testdata/data")
describe('the selectcase', () => {
    it("case",async()=>{
       await Home.open();
       await Home.changecuurency(data.select);
    })
});
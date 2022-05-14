 const Home=require("../pages/home")
 const data= require("../testdata/data")

 describe("search case",()=>{

     it("auto",async()=>{
       await Home.open();
       await Home.search(data.productname1);
     })
 })
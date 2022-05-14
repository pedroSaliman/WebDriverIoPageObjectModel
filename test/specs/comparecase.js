const Home=require("../pages/home")
const Product=require("../pages/product")
const Compare=require("../pages/compare")
const data= require("../testdata/data")

 describe("compare case",()=>{

     it("auto",async()=>{
       await Home.open();
       await Home.search(data.productname1);
    
       await Product.laptoplink();
       await Product.clickcompare();
       await Home.search(data.productname2);
       await Product.laptoplink();
       await Product.clickcompare();
       await Compare.clicktoclearcompare();
       await expect(Compare.txt).toBeExisting();
       await expect(Compare.txt).toHaveTextContaining("You have no items to");



     })})
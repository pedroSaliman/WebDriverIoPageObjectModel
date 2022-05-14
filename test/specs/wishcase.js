const Home=require("../pages/home")
const Product=require("../pages/product")
const Wishlist = require("../pages/wishlist")
const data= require("../testdata/data")

 describe("wishcase",()=>{

     it("auto",async()=>{
       await Home.open();
       await Home.search(data.productname1);
       await Product.laptoplink();

       await Product.wishlist();
       await expect(Wishlist.wishtxt).toBeExisting();
       await expect(Wishlist.wishtxt).toHaveTextContaining("list")
       await Wishlist.wishinfo(data.quantity);
     })
 })
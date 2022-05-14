const Home=require("../pages/home")
describe('the hovercase', () => {
    it("case",async()=>{
       await Home.open();
       await Home.moveto();
       await expect(Home.desktopmessage).toBeExisting();
       await expect(Home.desktopmessage).toHaveTextContaining("top");
    })
});

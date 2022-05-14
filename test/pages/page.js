const data=require("../testdata/data")
module.exports=class Page{

    open(){
        browser.maximizeWindow();
        return browser.url(data.baseurl);
        
    }

}
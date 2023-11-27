
let browserName = 'chrome';
let testingType ;
launchBrowser(browserName);
testType(testingType);

function launchBrowser(chrome) {
    if(browserName = "chrome"){
        console.log("Launch Chromebrowser")
   }else
    console.log("Otherwise")
  }

  function testType(testingType) {
    switch(testingType){
        case "smoke":
            console.log("testType is smoke");
            break;
        case "sanity":
            console.log("testType is sanity"); 
            break;
        case "Regression":
                console.log("testType is Regression");  
                break;
        case "Default":
            console.log("testType is Regression");  
                break;
        default:
            console.log("testType is defaultsmoke"); 
            break;     
    }
}




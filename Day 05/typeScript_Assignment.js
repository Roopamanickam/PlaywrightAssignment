//Create immutable variable and print
var browserVersion = 117;
console.log("The browser version is ".concat(browserVersion));
var bDetails = {
    bName: 'Edge',
    version: 115
};
console.log("The browsername is ".concat(bDetails.bName, " and version is ").concat(bDetails.version));
//Implict type reference (will not mention datatype)
var isHeadless = true;
console.log("Running script in Headless mode: ".concat(isHeadless, " "));
//Explict type reference (datatype will be  mentioned)
var releaseYear = 1998;
console.log("The release year is: ".concat(releaseYear, " "));
//use 'any' data type and use two values with different data types
var browserLogo;
browserLogo = "Crystal";
console.log("The browserlogo is ".concat(browserLogo));
browserLogo = true;
console.log("The browserlogo crystal is printed : ".concat(browserLogo));
/* browserLogo = undefined;
 console.log(`  undefined browserlogo  : ${browserLogo}`);

 browserLogo = null;
 console.log(`  Null browserlogo   : ${browserLogo}`); */

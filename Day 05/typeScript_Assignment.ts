//Create immutable variable and print

const browserVersion : number = 117;
console.log(`The browser version is ${browserVersion}`);

//declare a type datatype with variables bName as Edge and updated version as 115  

 type  browserDetail = {
    bName: string;
    version : number;
}

let bDetails: browserDetail = {
    bName :'Edge',
    version : 115
}

console.log( `The browsername is ${bDetails.bName} and version is ${bDetails.version}`);

//Implict type reference (will not mention datatype)
let isHeadless  = true;
console.log(`Running script in Headless mode: ${isHeadless} `);

//Explict type reference (datatype will be  mentioned)
let releaseYear : number =1998;
console.log(`The release year is: ${releaseYear} `);

//use 'any' data type and use two values with different data types
let browserLogo : any;
 browserLogo = "Crystal";
 console.log(`The browserlogo is ${browserLogo}`);

 browserLogo = true;
 console.log(`The browserlogo crystal is printed : ${browserLogo}`);
/* browserLogo = undefined;
 console.log(`  undefined browserlogo  : ${browserLogo}`);

 browserLogo = null;
 console.log(`  Null browserlogo   : ${browserLogo}`); */

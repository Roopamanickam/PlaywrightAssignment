let name  = "Roopa";
let chars = name.split("");
console.log(chars);
let leng = chars.length;
console.log(leng);

let revStr = "";

function reverseName(chars) {
    for (let index = leng-1; index >= 0; index--) {
        revStr += chars[index];
      // console.log(revStr);
       
}  
console.log(revStr);
}

function checkPalindrome(name,revStr) {
    if(revStr ==name ){
        console.log("palindrome");
    }else{
        console.log("Not a palindrome");
    }     
}

reverseName(chars);

checkPalindrome(name, revStr);


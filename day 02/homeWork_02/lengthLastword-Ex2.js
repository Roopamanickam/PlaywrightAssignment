
const input  = "   fly me   to   the moon  "
let words =input.replace(/\s+/g, ' ');
console.log(words);
let tWords = words.trim().split(" ");
//console.log(tWords.length-1);
console.log("Length of the last word : "+tWords[tWords.length-1].length);




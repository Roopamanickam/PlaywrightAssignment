const input  = "Hello World"
let words =input.replace(/\s+/g, ' ');
console.log(words);

let tWords = words.trim().split(" ");
let lastWord = tWords.pop();

console.log("The last word is "+lastWord+" and its lenght is "+lastWord.length);




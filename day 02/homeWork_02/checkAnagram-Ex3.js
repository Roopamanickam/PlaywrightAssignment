
function isAnagram(str1, str2) {
    // Removes spaces and convert into the lowercase letter
  
    str1= str1.replace(/\s/g, '').toLowerCase()
    str2 = str2.replace(/\s/g, '').toLowerCase()
    // console.log(str1, str2)
  
    if (str1.length !== str2.length) {
      
      //console.log(str1 +" "+str2 +"  is not Anagram");
      return false
    }
  
    // Sort the characters in the given string
    sortedStr1 = str1.split('').sort().join('')
    sortedStr2 = str2.split('').sort().join('')
  
    // Compare the sorted String
  
    return sortedStr1 === sortedStr2;
    //console.log(str1 +" "+str2 +" is  an Anagram");
  }

  /*
  const result1 = isAnagram('listen', 'silent');
  if(result1 == false){
    console.log("The words are not anagram")
  }else{
    console.log("Result1 - The words are anagram")
  }
  
  const result2 = isAnagram('Hello', 'world');
  if(result2 == false){
    console.log("The words are not anagram")
  }else{
    console.log("Result2 - The words are anagram")
  }
*/
  //passing both inputs here..
function callAnagram() {
    
  for (let i = 1; i <=2; i++) {
    if(i == 1){
       const result =  isAnagram('listen', 'silent');
        console.log(result)
    }  else
   if(i==2){
    const result =  isAnagram('hello', 'World');
    console.log(result)
    }
  } 
}
  callAnagram(); 
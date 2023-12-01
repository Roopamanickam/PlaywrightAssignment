let nums1 = [1,2,2,1];
let nums2 = [2,2];
var temp = [];

nums1Leng = nums1.length;
nums2Leng = nums2.length;

//console.log(nums1Leng,nums2Leng);

function arrayIntersection(nums1, nums2) {
    const temp = [];
  
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] == nums2[j] && !temp.includes(nums1[i])) {
          temp.push(nums1[i]);
        }
      }
    }
  
    return temp;
  }

  const result1 = arrayIntersection(nums1,nums2);
  console.log(result1);
/*
//function to remove duplicates in the temp
function removeDuplicates(temp) {
    let unique = [];
    for (i = 0; i <= temp.length; i++) {
        if (unique.indexOf(temp[i]) === -1) {
            unique.push(temp[i]);
        }
    }
    return unique;
}
*/

//console.log(removeDuplicates(temp));








const nums = [2,4,5,2,1,2,2];
const k = 2;
let count =0;
//let len = nums.length;
console.log(nums.length);

function getCount() {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == k){
            count ++;
        }
    }
    console.log(count);
}

getCount();
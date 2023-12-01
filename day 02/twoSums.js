const nums = [2,4,7,8,11,14];
const target = 18;

function getSumCount(nums,t) {
    for (let i = 0; i <= nums.length; i++) {
           for (let j = 0; j <= nums.length; j++) {
                let sum = nums[i] + nums[j];
            if(sum == t){
                console.log(nums[i]+"+"+nums[j] +" = " +t+ " at index - ("+i+","+j+")");
            }
            
        }
        
    }
}

getSumCount(nums, target);

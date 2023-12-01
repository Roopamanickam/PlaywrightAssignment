let nums = [34, 7, 21, 89, 54, 10, 91, 67]
let max = nums[0];
let min = nums[0];

function findMax(nums) {
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > max) {
          max = nums[i];
        }
      }
      
      console.log(max);
      let maxNumIndex = nums.indexOf(max);
      console.log("Maximum index Number:"+nums.indexOf(max));
}

function findMin(nums) {
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] < min) {
          min = nums[i];
        }
      }
      
      console.log(min);
      let minNumIndex = nums.indexOf(min);
      console.log("minmum index Number:"+nums.indexOf(min));
}
findMax(nums);
findMin(nums);

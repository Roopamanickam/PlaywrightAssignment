//let nums = [0,1,0,3,12];
let nums = [0,1,0,3,12];
 function moveZero(nums) {
    var i, temp=[];

    for (i = 0; i < nums.length-1; i++) {
        if(nums[i] === 0) {
            temp = nums.splice(i, 1);
            console.log("=====>"+temp);
            nums.push(temp[0]);
        }      
    }  
    console.log(nums);
};

moveZero(nums);







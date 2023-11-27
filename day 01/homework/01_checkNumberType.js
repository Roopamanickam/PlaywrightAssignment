
var number = 0;
function checkNumberType(number) {
    if(number > 0){
        console.log("Number is greater than zero :"+number);
       
    } else if(number < 0){ 
        console.log("Number is less than zero :"+number);
        
    } else{
        console.log("number is equal to zero:"+number);
       
    }
}

checkNumberType(number);
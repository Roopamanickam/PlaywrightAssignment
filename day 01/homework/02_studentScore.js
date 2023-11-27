
let score = 100;
calculateGrade(score);

  function calculateGrade(score) {
    switch(true){
        case (score <=100 && score >= 90):
            console.log("Grade A+ :"+score);
            break;
            case (score < 90 && score >= 75):
            console.log("Grade A :"+score); 
            break;
        case (score >= 60 && score < 75):
                console.log("Grade B :"+score);  
                break;
        case (score < 60 && score >= 40):
            console.log("Grade  C :"+score);  
                break;
        default:
            console.log("Grade F :"+score); 
            break;     
    }
}




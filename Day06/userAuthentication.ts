class userAuthenticaion {
/* userNmae:string = 'Raj'
pwd:string = 'Raj@123'
email:string = 'Raj@google.com' */

    Login(userNmae:string,pwd:string,email?:string):string{      
        console.log(" I have logged in with below creds:");
           return `  userNmae: ${userNmae} and pwd: ${pwd}`; 
    }

    Logout(){
        console.log(" I have Logged out")
    }

    ResetPassword(){
        console.log(" Password changed")
    }
  
}

const myObj = new userAuthenticaion();
console.log(myObj.Login("Anju","Anju_123"));
myObj.Logout();
myObj.ResetPassword();
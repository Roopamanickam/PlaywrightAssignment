var userAuthenticaion = /** @class */ (function () {
    function userAuthenticaion() {
    }
    /* userNmae:string = 'Raj'
    pwd:string = 'Raj@123'
    email:string = 'Raj@google.com' */
    userAuthenticaion.prototype.Login = function (userNmae, pwd, email) {
        console.log(" I have logged in with below creds:");
        return "  userNmae: ".concat(userNmae, " and pwd: ").concat(pwd);
    };
    userAuthenticaion.prototype.Logout = function () {
        console.log(" I have Logged out");
    };
    userAuthenticaion.prototype.ResetPassword = function () {
        console.log(" Password changed");
    };
    return userAuthenticaion;
}());
var myObj = new userAuthenticaion();
console.log(myObj.Login("Anju", "Anju_123"));
myObj.Logout();
myObj.ResetPassword();

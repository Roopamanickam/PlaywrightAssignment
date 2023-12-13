"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
        this.myProfile = 'ProfileDetails';
    }
    Button.prototype.Render = function () {
        console.log(this.myProfile);
        console.log("Button-Login");
        console.log("Button-Logout");
    };
    Button.prototype.handleEvent = function () {
        console.log("Click Profile Details");
    };
    return Button;
}());
var TextField = /** @class */ (function () {
    function TextField() {
    }
    TextField.prototype.Render = function () {
        console.log("Text Field- USerName");
        console.log("Text Field-Password");
    };
    TextField.prototype.handleEvent = function () {
        console.log("Click LeadID ");
    };
    return TextField;
}());
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.prototype.Render = function () {
        console.log("checkbox - Gender ");
    };
    Checkbox.prototype.handleEvent = function () {
        console.log("Select Male/Female");
    };
    return Checkbox;
}());
var buttonObj = new Button();
var txtfieldObj = new TextField();
var chkboxObj = new Checkbox();
buttonObj.Render();
buttonObj.handleEvent();
txtfieldObj.Render();
txtfieldObj.handleEvent();
chkboxObj.Render();
chkboxObj.handleEvent();

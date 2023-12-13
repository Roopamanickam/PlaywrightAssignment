import {UIComponent} from "./InterfcaeUIComponent";

class Button{
     myProfile:String = 'ProfileDetails'
    Render():void{
        console.log(this.myProfile);
        console.log("Button-Login");
        console.log("Button-Logout");

    }
    handleEvent():void{
        console.log("Click Profile Details");
    }
}

class TextField{
    Render():void{
        console.log("Text Field- USerName");
        console.log("Text Field-Password");
    }
    handleEvent():void{
        console.log("Click LeadID ");
    }
}

class Checkbox{
    Render():void{
        console.log("checkbox - Gender ");
    }
    handleEvent():void{
        console.log("Select Male/Female");
    }
    
}

const buttonObj = new Button();
const txtfieldObj = new TextField();
const chkboxObj = new Checkbox();

buttonObj.Render();
buttonObj.handleEvent();
txtfieldObj.Render();
txtfieldObj.handleEvent();
chkboxObj.Render();
chkboxObj.handleEvent();


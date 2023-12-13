import{SocialMediaFeature} from "./InterfaceSocialMedia";
import { UIComponent } from "./InterfcaeUIComponent";

class Post implements UIComponent,SocialMediaFeature {

    sharePost():void{
        console.log('2k post till date' );
    }
    Render():void{
        console.log("Render from Post method");
    }
    handleEvent():void{
        console.log("HandleEvent from Post method");
    }
}
class Comment implements UIComponent,SocialMediaFeature {
    sharePost():void{
        console.log('1Lakh comments so far' );
    }
    Render():void{
        console.log("Render from Comment method");
    }
    handleEvent():void{
        console.log("HandleEvent from Comment method");
    }
    
}
class Like implements UIComponent,SocialMediaFeature {
    sharePost():void{
        console.log('50K Likes so far' );
    }
    Render():void{
        console.log("Render from Like method");
    }
    handleEvent():void{
        console.log("HandleEvent from Like method");
    }
    
}

const postObj = new Post();
const commentObj = new Comment();
const likeObj = new Like();

postObj.Render();
postObj.handleEvent();
postObj.sharePost();

commentObj.Render();
commentObj.handleEvent();
commentObj.sharePost();

likeObj.Render();
likeObj.handleEvent();
likeObj.sharePost();




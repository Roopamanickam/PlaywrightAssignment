class ShoppingCart{

//properties
item1: string = "Pencil";
item2: string = "Eraser";
item3: string = "Marker";
//accName : string = "Anju";
//cardNumber : number = 101459900;

    addItem():void{
        console.log(`Item1 added : ${this.item1}`);
        console.log(`Item1 added : ${this.item2}`);
        console.log(`Item1 added : ${this.item3}`);
    }

    removeItem(): void{
    console.log(`Item3 removed from cart : ${this.item3}`);
    }

    checkout(accName:string,cardNumber:number){

        console.log(   `Account Name: ${accName} and card Number : ${cardNumber}` )

       // return `${accName},${cardNumber}`

    }
}

const ShopCart = new ShoppingCart();

ShopCart.addItem()
ShopCart.removeItem()
ShopCart.checkout("Anju",101459900)


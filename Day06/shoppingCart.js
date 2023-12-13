var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        //properties
        this.item1 = "Pencil";
        this.item2 = "Eraser";
        this.item3 = "Marker";
    }
    //accName : string = "Anju";
    //cardNumber : number = 101459900;
    ShoppingCart.prototype.addItem = function () {
        console.log("Item1 added : ".concat(this.item1));
        console.log("Item1 added : ".concat(this.item2));
        console.log("Item1 added : ".concat(this.item3));
    };
    ShoppingCart.prototype.removeItem = function () {
        console.log("Item3 removed from cart : ".concat(this.item3));
    };
    ShoppingCart.prototype.checkout = function (accName, cardNumber) {
        console.log("Account Name: ".concat(accName, " and card Number : ").concat(cardNumber));
        // return `${accName},${cardNumber}`
    };
    return ShoppingCart;
}());
var ShopCart = new ShoppingCart();
ShopCart.addItem();
ShopCart.removeItem();
ShopCart.checkout("Anju", 101459900);

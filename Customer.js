/*
### Customer Class

    * shoppingBasket = [{'book':item}]

    * Functions()
        * startShopping()
        * addNewProduct()
        * 
   * Input String Breakdown
        * String amount: First Item
        * String itemName: First number to "at"
        * Double salesPrice: 14.99
    * Checks
        * If imported is in input create instance of ImportTax
        * If pills is in input create instance  of TaxExempt
*/

class Customer {
  constructor() {
    this.shoppingBasket = [];
    this.words = [];
    this.Continue = "y";
  }

  startShoppingMethod() {
    const prompt = require("prompt-sync")();
    while (this.Continue == "y") {
      const item = prompt("What will you be purchasing today?   ");
      var itemwords = item.split(" ");
      this.words.push(itemwords);
      let PurchasedItem = itemwords[1];
      let PurchasedPrice = itemwords[3];
      let ListNontaxedItems = ["Pills", "Chocolate", "Book"];
      let TaxedStatus;
      let i = 0;
      let searchWord = "at";
      console.log(this.words[0].length);
      this.Continue = prompt("Would you like to continue y/n?   ");
    }
  }
  searchForInputs() {
    this.startShoppingMethod();
    let x = 0;
    let keywords = [];

    for (let y = 0; this.words[0].length > y; ) {
      let i = 0;
      let x = 0;
      if (this.words[y][i] === "at") {
        keywords.push(this.words[y][1], this.words[y][i + 1]);
        y++;
        i = 0;
        console.log(keywords + "jjkljjkl");
      } else {
        i++;
      }
      return "Found it";
    }
  }
}

const myCustomer = new Customer();
myCustomer.searchForInputs();

# Sales Tax | Challenge

## DESIGN: Create Objects to Model Problem

### Product Class

    * itemName
    * amount = 1
    * salesPrice
    * salesTax = .10

    function updateAmount()
        this.amount += 1;

### TaxExempt (Product Child)

    * Books | Food | Med Items
    * salesTax = None

### ImportTax (Product Child)

    *  Imported Items
    *  salesTax = .05

### Customer Class

    * shoppingBasket = [{'book':item}]

    * Functions()
        * startShopping()
        * addNewProduct()

### Receipt Class

    * shoppingBasket = [{'book':item}]
    * itemTotal

    * Functions()
        * calculateProductSalesTax()
            * Round up to nearest .05 cents.
        * calculateTotal()
        * showProducts()

## -----------------------------------

## CORE LOGIC:

### Input

    * Input String Breakdown
        * String amount: First Item
        * String itemName: First number to "at"
        * Double salesPrice: 14.99
    * Checks
        * If imported is in input create instance of ImportTax
        * If pills is in input create instance  of TaxExempt

### PSEDUOCODE

    * function startShopping ()
        * mainInput -> "Welcome customer please enter product or enter x to checkout"
        * while (input not x )
        * Check if x is entered
            * If not addNewProduct(input)
            * If yes create receiptObject(shoppingBasket)
        * return true

    * function addNewProduct (String input)
        * Breakdown String
        * Check if product exists in shoppingBasket
            *  If it does update amount
            *  if not create appropriate instance object

## runner.js

- customer = new Customer
- basket = customer.startShopping()
- receipt = new Receipt(basket)
- receipt.calculateTotal()

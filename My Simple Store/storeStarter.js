"using strict;"
//Marty De Alba 
//create array of objects 
//each product is an object with item and price 

const inventory = [
    {item: "Baseball Cap", price: 14.99},
    {item: "Baseball Glove", price: 100.00},
    {item: "Batting Glove", price: 12.50},
    {item: "Giants Jersey", price: 49.99},
    {item: "A's Jersey", price: 49.99},
    {item: "Dodgers Jersey", price: 2.00},
    {item: "Baseball", price: 5.00},
];
//console log the variables to document 
console.log("item length is " + inventory.length);
console.log(inventory[0]);
console.log(inventory[1]);
console.log(inventory[2]);
console.log(inventory[3]);
console.log(inventory[4]);
console.log(inventory[5]);
console.log(inventory[6]);

//declare any global variables
let grandtotal = 0;
//need these variables for printing purposes
let quantity = 0;
let itemtotal = 0;


//display the inventory in a table on the webpage
//creating table here + following tables.js
var tableHTML = "<table>"  + 
                "<caption>Store Items</caption>" + 
                "<tr> <th>Item</th><th>Price</th> </tr>";

for (var i = 0; i < inventory.length; i++ ){
    //add the rows for each inventory[i] 
    //this is a for loop
        tableHTML += "<tr><td>" + inventory[i].item +
                    "</td><td>" + parseFloat(inventory[i].price).toFixed(2) +
                    "</td></tr>";
}
//add rows for the products
//close the table with a </table> tag
tableHTML = tableHTML + "</table>";
console.log(tableHTML);
//print the table using the inventoryTable ID
document.getElementById("inventoryTable").innerHTML = tableHTML;

//function to run when add is clicked
//simple adder 3 video for if statement and window alert for missing info
function addItem(){

//getting item data and console log into html
let itemname = document.getElementById("item").value;
console.log("itemname is " + itemname);

//get item price
let itemprice = findPrice(itemname);
console.log("itemprice is " + itemprice);

//If the itemprice returned is -1 do a window.alert with the message "item not found"
if (itemprice == -1) {
    window.alert("Item is not found.");
}
    else{
    //getting item quantity and console log
    quantity = parseFloat(document.getElementById("quantity").value);
    console.log("quantity is " + quantity);

    itemtotal = itemprice * quantity;
    console.log("itemtotal is  " + itemtotal);

    //we need to add itemtotal to the grandtotal 
    //grandtotal = grandtotal + itemtotal
    grandtotal = grandtotal + itemtotal;
    console.log("grandtotal is " + grandtotal + " itemtotal is " + itemtotal)
    }

    //display the grand total on the page
    document.getElementById("total").innerHTML = grandtotal;
    console.log("Invoice Total $" + grandtotal);
    console.log("item total " + itemtotal);

     //add receipt in text area at price
    let invoice = quantity + " " +  itemname + " at " + itemprice + " each = " + "$" + itemtotal + " \n"
    console.log(invoice)

 
    document.getElementById("invoice").innerHTML += invoice;
    //document.getElementById("quantity") + document.getElementById("itemname") + " at " + document.getElementById("itemprice") + " each = " + document.getElementById("itemtotal")
    //(qty) (name of item) at (price) each = (itemtotal)  
    //we need to display this information in the <textarea> tag which holds the id="invoice"
 } //end add funtion

//function to run when clear is clicked
//clear the text boxes and the sum
//THIS FUNTION IS NOT COMPLETE
//SO FAR YOU HAVE ONLY RESET ITEM NAME AND QUANTITY
function newOrder(){
    console.log("reset the whole order and setting to empty string")
    document.getElementById("item").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("total").innerHTML = "";
    document.getElementById("invoice").value = "";
}

//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}
/*)
Additional correction
If I click the button without valid input there should just be error message, nothing in receipt.  You are missing code to validate that data is there.  addItem needs to start with if statement to check:

//is data there?
if (document.getElementById("item").value == "" || document.getElementById("quantity").value == ""){
     alert("missing data");
}
else{
     //get itemname
     //call function to get itemprice
     //was it found?
     if (itemprice != -1){
           //get quantity
           //calculate itemtotal
           //add to grandtotal
           //display receipt
          //display grandtotal
     }
     else{
           alert("item not found");
     }
There are also some unmatched tags in your .html file.  The problem is here
<img src="oracle.jpeg" alt="storeatpark" height="150px" width="220px"></a>
You don't need </a>, there is no <a> to match it.
newOrder function also needs to reset the grandtotal variable:
grandtotal = 0;
textarea always needs to use .value, not .innerHTML
*/

const mysql = require("mysql");
const inquirer = require("inquirer")

//Connection parameters to database
var connection = mysql.createConnection({
  host     : 'localhost',
  //port     : 8080,
  user     : 'root',
  database: 'bamazon',
  password : '0jsw693Ml'
});

/*bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
*/

/*6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.*/

inquirer.prompt([
	{
	    type: 'list',
	    name: 'order',
	    message:'WHICH PRODUCT DO YOU WISH TO BUY',
	    choices: [
	    	'chainsaw',
	    	'elephant butt',
	    	'angry toddler',
	    	'dirty dishes',
	    	'stinky dog',
	    	'screwdrivey thing',
	    	'empty tuna can',
	    	'junk mail',
	    	'chainsaw +1',
	    	'hubbensnuffer',
	    	'globbledinger',
	    	'dumpty doo']
	},{
		type: 'number',
	    name: 'quantity',
	    message: 'HOW MANY DO YOU NEED'
	}
]).then(function (answers) {
	var userOrder = answers.order;
	var orderQuantity = answers.quantity;

	//console.log(JSON.stringify(answers, null, '  '));

	checkInventory(userOrder, orderQuantity);
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

function checkInventory(userOrder, orderQuantity){
	/*7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.*/
	var query = "SELECT product_name, price, stock_quantity FROM bamazon.products WHERE product_name =\"" + userOrder + "\"";
	
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	console.log('Order: '+ userOrder); 
	console.log('Quantity: ' + orderQuantity);

 	connection.query(query, {userOrder}, function(err, res) {

  		var stockAvailable = res[0].stock_quantity
  		var unitPrice = res[0].price;

  		if (err) {
    		return;		
    		console.error('error connecting');
  		}
		console.log("Stock Quantity Available: " + stockAvailable)
		console.log("Unit Price: " + unitPrice)

	  	if(stockAvailable >= orderQuantity){
	  		processOrder(userOrder, orderQuantity, unitPrice);
	  	} else {
			console.log(`Insufficient quantity!`); 
  		};
	connection.end(function(err) {/*The connection is terminated now*/});
	});
};//end function

function processOrder(userOrder, orderQuantity, unitPrice){
	/* 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.*/
	console.log("processing order...");
	/*   * This means updating the SQL database to reflect the remaining quantity.*/
	var query = 'UPDATE bamazon.products SET stock_quantity = stock_quantity - \"'+ orderQuantity + '\" WHERE product_name =\"' + userOrder + "\"";

	connection.query(query, {userOrder}, function(err, res) {
  		//var stockAvailable = res[0].stock_quantity
  		if (err) {
    		return;		
    		console.error('error connecting');
  		} 
	});
	connection.end(function(err) {/*The connection is terminated now*/});
	calculateTotal(userOrder, orderQuantity, unitPrice);
};

function calculateTotal(userOrder, orderQuantity, unitPrice){

	console.log("Total price: " + unitPrice * orderQuantity )
	console.log("Success! Your order will be shipped via North Korean Priority Mail. Please wait 4-6 years for delivery");
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

	//connection.end(function(err) {/*The connection is terminated now*/});
	//});

}

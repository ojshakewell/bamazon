const mysql = require("mysql");
const inquirer = require("inquirer")


/*bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.*/

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
	    	'chainsaw',
	    	'hubbensnuffer',
	    	'globbledinger',
	    	'dumpty doo'
		]
	},{
		type: 'number',
	    name: 'quantity',
	    message: 'HOW MANY DO YOU NEED'
	}
]).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});


//Connection parameters to database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0jsw693Ml'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});


/*7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.*/

 /*  * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.*/

/*8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.*/
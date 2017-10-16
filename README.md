# Bamazon
# Node.js & MySQL

## Overview

Bamazon is an Amazon-like storefront that demonstrates connecting to and aupdateing a MySQL database via NodeJS. The app will take in orders from customers and deplete stock from the store's inventory.

bamazonCustomer.js uses MySQL and Inquirer npm packages to get the order information and make the necessary changes in the product's table.

## User Guide

1. Navigate to the appropriate directoy and enter `bamazonCustomer.js`

1. Select the item you wish the purchase using the arrow keys. 
![selectItem](/images/selectItem.JPG)

1. Select the quantity desired and Bamazon will calculate your total price and remove that quantity from Bamazon inventory.
![orderSuccess](/images/orderSuccess.JPG)

1. If the quantity ordered is more than exists in the Bamazon inventory, the order will terminated.
![orderFail](/images/orderFail.JPG)

1. Here is annother example of multiple user interactions.
![multipleOrders](/images/multipleOrders.JPG)

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price FLOAT(5,2),
stock_quantity INTEGER(5),
PRIMARY KEY(item_id)
);

ALTER TABLE products
ADD product_sales FLOAT(10,2);



INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("chainsaw", "hardware", 199.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("elephant butt", "pets", 79.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("angry toddler", "baby_care", 281.38, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("dirty dishes", "kitchen", 39.99, 115);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("stinky dog", "pets", 9.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("screwdrivey thing", "hardware", 9.99, 102);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("empty tuna can", "kitchen", 0.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("junk mail", "kitchen", 29.99, 44);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("chainsaw +1", "hardware", 39.99, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("hubbensnuffer", "hardware", 49.99, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("globbledinger", "pets", 59.99, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("dumpty doo", "baby_care", 69.99, 77);


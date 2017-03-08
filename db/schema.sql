CREATE DATABASE burgers_db; 
USE burgers_db;

CREATE TABLE burgers (
	id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	burger_name VARCHAR(100) NOT NULL,  
	devoured BOOLEAN NOT NULL default false, 
	dated timestamp
);
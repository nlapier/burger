 CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
	date TIMESTAMP,
    burger_name VARCHAR(50),
    description VARCHAR(200),
	devoured BOOLEAN
);

DROP TABLE burgers;


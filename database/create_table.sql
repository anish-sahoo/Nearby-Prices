DROP TABLE IF EXISTS "Categories";
DROP TABLE IF EXISTS "CultureSpecialty";
DROP TABLE IF EXISTS "ExpenseRatings";
DROP TABLE IF EXISTS "Geolocation";
DROP TABLE IF EXISTS "Items";
DROP TABLE IF EXISTS "Prices";
DROP TABLE IF EXISTS "Stores";
DROP TABLE IF EXISTS "Users";

CREATE TABLE "Categories" (
	"category_id"	INTEGER NOT NULL,
	"category_name"	TEXT NOT NULL UNIQUE,
	PRIMARY KEY("category_id" AUTOINCREMENT)
);

CREATE TABLE "CultureSpecialty" (
	"id"	INTEGER,
	"name"	TEXT NOT NULL UNIQUE,
	PRIMARY KEY("id")
);

CREATE TABLE "ExpenseRatings" (
	"expense_rating_id"	INTEGER,
	"expense_rating"	TEXT NOT NULL UNIQUE,
	PRIMARY KEY("expense_rating_id" AUTOINCREMENT)
);

CREATE TABLE "Geolocation" (
	"location_id"	INTEGER,
	"latitude"	REAL NOT NULL,
	"longitude"	REAL NOT NULL,
	"name_of_location"	TEXT,
	PRIMARY KEY("location_id","latitude","longitude")
);

CREATE TABLE "Items" (
	"item_id"	INTEGER,
	"item_name"	TEXT NOT NULL,
	"category_id"	INTEGER NOT NULL,
	"image"	BLOB,
	PRIMARY KEY("item_id" AUTOINCREMENT),
	FOREIGN KEY("category_id") REFERENCES "Categories"("category_id")
);

CREATE TABLE "Prices" (
	"item_id"	INTEGER,
	"store_id"	INTEGER,
	"price"	REAL NOT NULL,
	PRIMARY KEY("item_id","store_id"),
	FOREIGN KEY("item_id") REFERENCES "Items"("item_id"),
	FOREIGN KEY("store_id") REFERENCES "Stores"("store_id")
);

CREATE TABLE "Stores" (
	"store_id"	INTEGER,
	"location_id"	INTEGER NOT NULL,
	"expense_rating_id"	INTEGER NOT NULL,
	"culture_specialty_id"	INTEGER,
	"name"	TEXT NOT NULL,
	PRIMARY KEY("store_id" AUTOINCREMENT),
	FOREIGN KEY("location_id") REFERENCES "Geolocation"("location_id"),
	FOREIGN KEY("expense_rating_id") REFERENCES "ExpenseRatings"("expense_rating_id"),
	FOREIGN KEY("culture_specialty_id") REFERENCES "CultureSpecialty"("id")
);

CREATE TABLE "Users" (
	"user_id"	INTEGER NOT NULL,
	"user_name"	TEXT NOT NULL UNIQUE,
	"full_name"	TEXT NOT NULL,
	"password"	TEXT NOT NULL,
	PRIMARY KEY("user_id" AUTOINCREMENT)
);
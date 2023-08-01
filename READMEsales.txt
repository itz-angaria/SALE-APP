Sales Management App
====================
This is a web application designed to manage sales data. It allows users to perform various tasks related to sales, such as adding new sales, viewing top sales, and monitoring revenue trends. The application is built using React and utilizes the React Router library for navigation.This repository contains the frontend and backend code for a Sales Management App. The app is built using React for the frontend and utilizes Express and MongoDB for the backend.


Features
--------
1 Add new sales records.
2 View top sales records.
3 See today's revenue.
4 Login to access the app.
5 Register as a new user.

Frontend Dependencies
---------------------
The frontend app uses the following major dependencies:

* React: A JavaScript library for building user interfaces.
* React Router: A library for handling navigation and routing in React apps.
* Axios: A library for making HTTP requests to the backend API.

Backend Dependencies
---------------------
The backend app uses the following major dependencies:

Express: A web application framework for Node.js.
Mongoose: A MongoDB object modeling tool designed to work in an asynchronous environment.


Folder Structure
-----------------
The important folders and files in the project are:

frontend
********
Contains the source code for the frontend app.

src: Contains the frontend components and pages.
----
public: Contains the static files for the frontend.
-------
App.js: The main entry point of the frontend app.
-------
backend
*******
Contains the source code for the backend app.

models: Contains the Mongoose models for the MongoDB collections.
-------
sale_model.js: Model for sales records.
----------
user_model.js: Model for user accounts.
-----------
routes: Contains the Express routes for different API endpoints.
-------
sale_route.js: Routes for managing sales records.
--------------
user_route.js: Routes for managing user accounts.
--------------
config.js: Configuration file for the backend, including the MongoDB connection details.
----------
server.js: The main entry point of the backend app.
----------
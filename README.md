
#   FreshCartMX Backend API

This project is a Node.js TypeScript API for a grocery store backend application. It uses MongoDB as the database and Mongoose as the ODM (Object-Document Mapper) for MongoDB.

##  Getting Started

Ensure to have the following installed:

- Node.js
- npm
- MongoDB

Clone the repository:

    git clone https://github.com/emmanuel-perez/fresh-cart-mx-backend.git

Install dependecies:

    npm install

##  Project Structure

    src/
    |-- config/
    |-- controllers/
    |-- middlewares/
    |-- models/
    |-- routes/
    |-- services/
    |-- types/
    |-- app.ts/
    |-- server.ts/

- config: Stores configuration files, such as environment variables and connection to the database.
- controllers: Contains the functions for calling a specific service.
- services: Contains the logic for handling HTTP requests and responses..
- models: Defines Mongoose models for MongoDB collections.
- routes: Defines the API routes and their corresponding controllers.
- app.ts: The entry point of the application.
- server.ts: Configures and starts the Express server.


##  Configuration 

Create a .env file in the root directory and add the following (add the mongo connection string to the MONGO_DB_CONNECTION value) :

    PORT=3000

    MONGO_DB_CONNECTION=

##  Running the server

Start the development server using the command:

    npm run dev

##  API Endpoints 

Postman Documentation

https://documenter.getpostman.com/view/17549938/2s9Yyv9epC


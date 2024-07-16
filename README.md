# E-commerce Project

This project is an e-commerce application built with Node.js, Express.js, MySQL, Sequelize ORM, and implements REST API for communication.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository contains the backend implementation of an e-commerce application. It provides functionalities for managing products, orders, users, and authentication.

## Features

- Authentication and authorization using JWT tokens.
- CRUD operations for products, orders, and users.
- Database interactions using Sequelize ORM.
- RESTful API design for seamless client-server communication.

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JSON Web Tokens (JWT)

## Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=ecommerce_db
   JWT_SECRET=your_jwt_secret
   ```

4. **Initialize the database:**

   Ensure MySQL is running, then run Sequelize migrations to set up the database schema:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

6. **Access the API:**

   The API will be available at `http://localhost:3000`.

## Usage

To use the API, refer to the API endpoints section below for available routes and request methods.

## API Endpoints

Below are the main API endpoints:

- **GET /api/products**: Fetch all products.
- **POST /api/products**: Create a new product.
- **GET /api/products/:id**: Fetch a single product by ID.
- **PUT /api/products/:id**: Update a product by ID.
- **DELETE /api/products/:id**: Delete a product by ID.
- **GET /api/orders**: Fetch all orders.
- **POST /api/orders**: Create a new order.
- **GET /api/orders/:id**: Fetch a single order by ID.
- **PUT /api/orders/:id**: Update an order by ID.
- **DELETE /api/orders/:id**: Delete an order by ID.
- **POST /api/auth/login**: User login endpoint.
- **POST /api/auth/register**: User registration endpoint.

## Database Schema

The database schema includes tables for `users`, `products`, `orders`, etc. For detailed schema, refer to Sequelize models in the `models` directory.

## Contributing

Contributions are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

Feel free to customize this template according to your specific project structure, additional features, or any other relevant details!
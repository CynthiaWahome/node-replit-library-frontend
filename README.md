
# Node.js Book Library API

This is a simple Node.js API built using Express and the Replit database. The API allows for CRUD (Create, Read, Update, Delete) operations on a collection of books.

## Features

- Create a new book entry
- Retrieve all book entries
- Retrieve a single book entry by ID
- Update an existing book entry
- Delete a book entry
- Clear the entire database

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or later)
- [NPM](https://www.npmjs.com/) (comes with Node.js)
- [Replit Database](https://www.npmjs.com/package/@replit/database)

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory.
3. Install the dependencies using npm:

   ```bash
   npm install
   ```

The Replit database package is included in the dependencies section of the package.json, so it will be installed automatically when you run npm install.

## Scripts

- **Start the Server:** Start the Node.js server using the following command:

  ```bash
  npm start
  ```

- **Development Mode:** Start the server with Nodemon for automatic restarting:

  ```bash
  npm run dev
  ```

## API Endpoints

### Get All Books

- **Endpoint:** `GET /api/books`
- **Description:** Retrieves all books from the database.

### Get a Single Book

- **Endpoint:** `GET /api/books/:id`
- **Description:** Retrieves a single book by its ID.

### Create a New Book

- **Endpoint:** `POST /api/books`
- **Description:** Adds a new book to the database.
- **Payload:**
  ```json
  {
    "id" : "1",
    "title": "Book Title",
    "author": "Author Name"
  }
  ```

### Update a Book

- **Endpoint:** `PUT /api/books/:id`
- **Description:** Updates the details of an existing book.
- **Payload:**
  ```json
  {
    "id" : "1",
    "title": "Updated Title",
    "author": "Updated Author"
  }
  ```

### Delete a Book

- **Endpoint:** `DELETE /api/books/:id`
- **Description:** Deletes a book by its ID.

### Clear the Database

- **Endpoint:** `DELETE /api/delete-database`
- **Description:** Deletes all book entries from the database.


## Dependencies

- **Express**: Web framework for Node.js
- **@replit/database**: Replit database client
- **Nodemon**: Tool for monitoring changes in your Node.js applications (development dependency)

## License

This project is licensed under the ISC License.

## Notes
This project is a beginner-friendly introduction to using Express and the Replit database in a Node.js application.
Make sure to monitor your database usage to avoid exceeding any limits on the Replit platform.

```

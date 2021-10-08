Coding Challenge Guidelines


In this test, you are expected to write a small web application to manage a list of Books. Each book has a name, ISBN, and an author. The test consists of two parts, a RESTful API as the backend and the Javascript based frontend application.


Backend implementation
Use the following structure to model the data

    Author (Model):
    firstName - the text field
    lastName - the text field
    Book (Model):
    bookName  - the text field
    isbn - the text field
    author - the included Author instance (aka foreign key)
Implement the following API endpoints:

GET /books/
 - Returns a list of books in the database in JSON format
GET /book/{{id}}/
 - Returns a detail view of the specified book id. Nest author details in JSON format
GET /authors/
 - Returns a list of authors in the database in JSON format
GET /author/{{id}}/
 - Returns a detail view of the specified author id
POST /author/
 - Creates a new author with the specified details - Expects a JSON body
POST /book/
 - Creates a new book with the specified details - Expects a JSON body
Optional: You can go a step further by implementing API endpoints to update existing records if you like. eg:

PUT /author/{{id}}
 - Updates an existing author - Expects a JSON body
PUT /book/{{id}}
 - Updates an existing book - Expects a JSON body
Please use node/express Framework to implement your backend and API layer.


Frontend implementation
Implement a small frontend application to consume the API you developed above.

The frontend should be able to show a list of names of the books available in the database. Upon clicking the name of a book on the list, the user should be navigated to a more detailed view of the selected book, where they are presented with the ISBN and the author details. You should also implement two forms where the user is able to create/update authors and books (using the 
POST
 and 
PUT
 endpoints) You are recommended to use React to create the frontend, but you are free to use a different Javascript framework.


Notes and recommendations
The languages, frameworks and libraries mentioned are recommendations only, you are free to use whatever you are comfortable with.
The project structure is up to you to decide.
You are recommended to use git commits in a logical manner to demonstrate the development progress.
Writing tests and adhering to development standards/conventions/best practices will let you gain extra points :)
Writing a robust and secure code (take into consideration the network/protocol security aspects and data input validation) will let you gain much more extra points :)

Evaluation Criteria
node/react/JS best practices
API implemented featuring all required endpoints
Completeness: did you complete the features? Are all the tests running?
XSS, SQLInjections - Security basics implemented?
Correctness: does the functionality act in sensible, thought-out ways?
Maintainability: is it written in a clean, maintainable way?

CodeSubmit
Please organize, design, test and document your code as if it were going into production - then push your changes to the master branch of your public Github repository.

Please provide the link to your repository in a below field, prior to submit.

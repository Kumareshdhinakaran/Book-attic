# STEP-2020

Sirius has taken an initiative to make us smart and resourceful persons through Sirius Technology Empowerment Program (STEP). The outcome of the step program is to learn technologies related to full-stack web development from Html to server deployment and complete the learning with a final mentor guided project.

# Outcome of the Internship

- To complete the learning of below technologies from the given Udemy course:
  1. HTML, CSS
  2. JavaScript, jQuery
  3. NodeJS
  4. MongoDB
- Final Project: Book attic (Maintain books category wise per user)
  1. In this web application using libraries and languages learned during the internship program. [HTML, CSS, JS/ jQuery, NodeJS, MongoDB]
  2. Add authentication for the application. [User should not be able to access the application without being logged in]
  3. Implement all the best practices and re-use code wherever possible.
  4. Add necessary error handling for all the forms. [Login/Registration/Add Book/Edit Book]

# Final Project - Requirements

    1. Register/Login Functionality

    Functionality

        • Login
            o Allow the user to log in when both username and password fields are
            filled, and user account exists in the database
            o If the user account doesn’t exist, throw error message as per provided comps (UX)
            o If any field is not filled, throw an appropriate error message

        • Registration
            o All fields are mandatory in the registration form
            o Register a new user if the username doesn't exist in the database and fix
            all the required fields are completed
            o Throw appropriate error messages when fields are missing/when the
            username already exists in DB.

        Service Calls

        • logInUser(username, password)
            o Use this method to authenticate the user to the application
        • signUpUser(user)
            o Use this method to register a new user on the platform
        • userExists(username)
            o Check whether username already exists in DB before signing up a new user

    2. Home Page

        Functionality

        • All the books added by the user should be available category-wise when the
        page is loaded
        • If there are no books added, then display “No Books Available” message

        Service Calls

        • getBooks(username)
            o Use this method to retrieve all the books added by the user

    3. Add Book Screen

        Functionality

        • Collect new book data from the form
        • Submit form and create an entry in the database only if all the fields are filled
        • Throw appropriate error message when mandatory fields are missing while
        submitting the form

        Service Calls

        • addBook(book)
            o Use this method to add a new book to attic(database)

    4. Edit Book Details Screen

        Functionality

        • Edit Book details
            o Update the place details when required fields are filled
            o Throw appropriate error messages similar to “Add form” when fields
            are missing/not filled
        • Delete Book
            o "Thrash icon" should delete the book from the attic(database) and redirect
            o the user to home page

        Service Calls

        • updateBook(book)
            o Use this method to update book details
        • deleteBook(book)
            o Use this method to permanently remove the book from the database

    5. Book Details Screen

        Functionality

        • Displays the details of the book along with some dummy/static reviews in the bottom of the page
        • The Add to Cart button is a dummy button and doesn’t have any action
        • The edit icon should take the user to “Edit Book Details” Screen

        Service Calls

        • getBookDetails(bookId)
            o Retrieves the book details of the specified book

    6. Sidebar

        Functionality

        • Position the logo referring to the wireframe.
        • Display the logged-in username on top-right with the dummy display picture
        (Outside Sidebar)
        • When logout button is clicked on the sidebar, the current user session should
        be terminated, and the user must be re-directed to login page

        Service Calls

        • logout(username)
            o Logs out the current user from the active session

# Final Application

Click here [Book-attic](http://book-attic.herokuapp.com/)

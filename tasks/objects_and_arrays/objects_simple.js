// Objects:
// 1. Create a User object that contains properties for name, age, and email. Include methods to greet (returns a greeting message) and updateEmail.

const user = {};

// user.greet();
// user.updateEmail("newalice@example.com");

// 2. Create an array of workers objects with properties for name and age. Write a function that takes an age as a parameter and returns an array of users older than that age.
const workers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "Max", age: 47 }
];

function filterUsersByAge(minAge) {
  // Code
}

// const olderUsers = filterUsersByAge(24);

// 3. Modify the book objects to include a pagesRead property. Write a function that calculates and returns the total number of pages read from all books.
const collection = [
  { title: "The Great Gatsby", pages: 180, pagesRead: 100 },
  { title: "1984", pages: 328, pagesRead: 50 },
  { title: "To Kill a Mockingbird", pages: 281, pagesRead: 281 }
];

function countTotalPagesRead() {
  // Code
}

// const totalRead = countTotalPagesRead();

// 4. Create an array of book objects, where each book has properties such as title, author, pages, and isRead. 
//    Write a function to add a new book and a function to list all books with their read status.
const library = [];

function addNewBook(params) {
  // Code
}
function listBooks(params) {
  // Code
}

// addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
// addBook("1984", "George Orwell", 328);
// listBooks(); // Title: example, Author: example, Pages: example, Read: true/false || yes/no

// 5. Extra: Grouping Library Functions into One Object
const librarySystem = {};

// Example usage:
// librarySystem.books // book[]
// librarySystem.listBooks(); :print in console: 'Title: string, Author: string, Pages: number, Read: true/false || yes/no'
// librarySystem.addNewBook(book); // :newBook
// librarySystem.getBookById(bookId); // :book | undefined
// librarySystem.updateBook(bookId, book); // :book
// librarySystem.deleteBook(bookId); // :true/false
// librarySystem.getBooksByAvailableStatus(status); // :book[] returns all available or unavailable books according to the filter

// Book Entity (shape of a book)
// book {
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
//   isAvailable: boolean;
// }
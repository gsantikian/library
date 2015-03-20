var sget = require('sget');

function Book(title, author, genre, length) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.length = length;
  this.status = "Checked-In";
}

function Library() {
  this.books = [];
}

Library.prototype.addBook = function(book) {
  this.books.push(book);
};

function userInput(str) {
  return sget(str).trim();
}

var catch22 = new Book("Catch-22", "Joseph Heller", "Fiction", "322");
var f451 = new Book("Fahrenheit 451", "Ray Bradbury", "Fiction", "453");

var library = new Library();

library.addBook(catch22);
library.addBook(f451);

var quit = false

while (!quit) {
  console.log(library);
  console.log("Library Inventory System");
  console.log("Please select from the following options:\n1. Add book to inventory\n2. Remove book from inventory\n3. List all books\n4. List books by genre\n5. Search by title\n6. Search by author\n7. Quit");
  var userSelection = userInput();

  switch (userSelection) {
    case '1':
      console.log("Add book");
      var title = userInput("Enter title:");
      var author = userInput("Enter author:");
      var genre = userInput("Enter genre:");
      var pages = userInput("Enter number of pages:");
      library.addBook(new Book(title, author, genre, pages));
      console.log("Book added to inventory.");
      break;
    case '2':
      break;
    case '3':
      break;
    case '4':
      break;
    case '5':
      break;
    case '6':
      break;
    case '7':
      console.log("Goodbye.");
      quit = true;
      break;
    default:
      console.log("Invalid input. Please try again by selecting #1-6");
  }
}
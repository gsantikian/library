var sget = require('sget');

function Book(title, author, genre, length, status) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.length = length;
  this.status = status;
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

var catch22 = new Book("Catch-22", "Joseph Heller", "Fiction", "322", "Checked-In");
var f451 = new Book("Fahrenheit 451", "Ray Bradbury", "Ficiton", "453", "Checked-In");

var library = new Library();

library.addBook(catch22);
library.addBook(f451);


// console.log(book);
console.log(library);

var quit = false

while(!quit) {
  console.log("Library Inventory System");
  console.log("Please select from the following options:\n1. Add book to inventory\n2. Remove book from inventory\n3. List all books\n4. List books by genre\n5. Search by title\n6. Search by author\n7. Quit");
  var userSelection = userInput();

  switch(userSelection) {
    case '1':
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
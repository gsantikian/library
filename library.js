var sget = require('sget');

function Book(title, author, genre, length) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.length = length;
  this.status = "Checked-In";
}

Book.prototype.printBookDetails = function() {
  console.log(this.title + " / " + this.author + " / " + this.genre + " / " + this.length + " / " + this.status);
};

function Library() {
  this.books = [];
}

Library.prototype.addBook = function(book) {
  this.books.push(book);
};

Library.prototype.removeBook = function(bookTitle) {
  this.books.splice(this.findBookPosition(bookTitle), 1);
};

Library.prototype.findBookPosition = function(bookTitle) {
  for (var i = 0, len = this.books.length; i < len; i++) {
    if (this.books[i].title === bookTitle) {
      return i;
    }
  }
};

Library.prototype.displayBooks = function() {
  if (arguments.length) {
    var propertyName = arguments[0];
    var value = arguments[1];
    this.books.forEach(function(book) {
      if (book[propertyName] === value) {
        book.printBookDetails();
      }
    });
  } else {
    this.books.forEach(function(book) {
      book.printBookDetails();
    });
  }
  console.log("\n");
};

function clear() {
  console.log('\033[2J');
}

function userInput(str) {
  return sget(str).trim();
}

var catch22 = new Book("Catch-22", "Joseph Heller", "Fiction", "322");
var f451 = new Book("Fahrenheit 451", "Ray Bradbury", "Fiction", "453");
var shortHistory = new Book("A Short History of Nearly Everything", "Bill Bryson", "Non-Fiction", "567");
var something = new Book("Something Happened", "Joseph Heller", "Fiction", "456");

var library = new Library();

library.addBook(catch22);
library.addBook(f451);
library.addBook(shortHistory);
library.addBook(something);

var quit = false;
console.log("Library Inventory System");

while (!quit) {
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
      clear();
      console.log(title + " added to inventory.");
      break;
    case '2':
      console.log("Remove book");
      var bookTitle = userInput("Enter title of book to remove:");
      library.removeBook(bookTitle);
      clear();
      console.log(bookTitle + " removed.");
      break;
    case '3':
      clear();
      console.log("All books:");
      library.displayBooks();
      break;
    case '4':
      console.log("Books by genre:");
      genre = userInput("Enter genre to search by:");
      clear();
      library.displayBooks("genre", genre);
      break;
    case '5':
      console.log("Search by title");
      title = userInput("Enter title:");
      clear();
      library.displayBooks("title", title);
      break;
    case '6':
      console.log("Search by author");
      author = userInput("Enter author:");
      clear();
      library.displayBooks("author", author);
      break;
    case '7':
      console.log("Goodbye.");
      quit = true;
      break;
    default:
      clear();
      console.log("Invalid input. Please try again by selecting #1-6");
  }
}
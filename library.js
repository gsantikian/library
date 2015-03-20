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

var catch22 = new Book("Catch-22", "Joseph Heller", "Fiction", "322", "Checked-In");
var f451 = new Book("Fahrenheit 451", "Ray Bradbury", "Ficiton", "453", "Checked-In");

var library = new Library();

library.addBook(catch22);
library.addBook(f451);


// console.log(book);
console.log(library);
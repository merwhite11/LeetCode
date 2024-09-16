/*
create a book class
input: title, author, isbn

create a library class
methods:
  add a new book
  remove a new book
  find a book
  list all books

read from file function
  input: json file
  output: array of Book objects

create instance of lib class
load book data from a file into the lib
call all methods on instance

*/

const fs = require('fs/promises');

// const readFile = (filePath) => {
//   return fs.readFile(filePath)
//     .then((data) => {
//       const parsedData = JSON.parse(data)
//       const books = parsedData.map(({title, author, isbn}) => new Book(title, author, isbn))
//       return books;
//     })
//     .catch((error) => {
//       console.log(error, 'Error reading file')
//     })
// }

const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath)
    const parsedData = JSON.parse(data)
    const books = parsedData.map(({title, author, isbn}) => new Book(title, author, isbn))
    return books;
  }
  catch (error) {
    console.error(error, 'Error reading file')
  }
}

//callback method
// fs.readFile('./library-data.json', (err, data) {
//   if (err) {
//     console.error(error, 'Error reading file')
//     return;
//   } else {
//     const parsedData = JSON.parse(data);
//     const books = parsedData.map(({title, author, isbn}) => new Book(title, author, isbn));
//     return books;
//   }
// })

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class Library {
  constructor() {
    this.books = []
  }

  addBook(book) {
    this.books.push(book)
  }

  removeBook(targetIsbn) {
    this.books = this.books.filter(({isbn}) => isbn !== targetIsbn)
  }

  findBook(isbn) {
    for(let book of this.books) {
      if(book.isbn === isbn) {
        console.log('Book found', book)
        return this.books[book]
      }
    }

  }

  listBooks() {
    this.books.map(book => console.log(book))
  }
}



const main = async () => {
  const sfPublic = new Library();
  sfPublic.books = await readFile('./library-data.json');
  const anotherBook = new Book('Book Sixteen', 'Author Sixteen', '4444')
  sfPublic.addBook(anotherBook)
  sfPublic.removeBook('4444')
  // console.log('sfbooks', sfPublic.books)
  sfPublic.findBook('1010')
  sfPublic.listBooks();
  sfPublic.addBook(anotherBook)
  sfPublic.listBooks();
}

main();


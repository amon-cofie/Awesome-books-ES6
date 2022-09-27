import ReadBook from './app.js';
import addToShelf from './add-to-shelf.js';
import dynamicStorageUpdate from './dynamic-update-function.js';

// the function that creates the new book object from the constructor
const createNewBook = () => {
  const titleEntry = document.querySelector('#title').value;
  const authorEntry = document.querySelector('#author').value;
  const newBook = new ReadBook(titleEntry, authorEntry);
  ReadBook.collection.push(newBook);
  addToShelf(newBook);
  dynamicStorageUpdate(ReadBook.collection);
};

export default createNewBook;

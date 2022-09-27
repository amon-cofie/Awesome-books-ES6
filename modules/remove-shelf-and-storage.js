import ReadBook, { bookShelf } from './app.js';
import dynamicStorageUpdate from './dynamic-update-function.js';

// the function that will remove the book from the screen
export const removeBook = (book) => {
  bookShelf.removeChild(book);
};

// the function that will remove the book from the local storage
export const removeLocal = (bookId) => {
  ReadBook.collection.forEach((e) => {
    if (e.Id === bookId) {
      const indexArr = ReadBook.collection.indexOf(e);
      ReadBook.collection.splice(indexArr, 1);
    }
  });
  dynamicStorageUpdate(ReadBook.collection);
};

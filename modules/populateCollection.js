import ReadBook from './app.js';
import addToShelf from './add-to-shelf.js';

// function that will get from storage and add to the collection
const populateCollection = () => {
  ReadBook.collection.forEach((element) => {
    addToShelf(element);
  });
};

export default populateCollection;

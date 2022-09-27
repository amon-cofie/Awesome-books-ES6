export const bookShelf = document.querySelector('#book-shelf');
export const form = document.querySelector('#main-form');
export const librarySection = document.querySelector('#library');
export const addBookSection = document.querySelector('#add-new-book');
export const contactUs = document.querySelector('#contact-us-section');

// defining the constructor for new book objects to be added
export default class ReadBook {
  constructor(bTitle, bAuthor) {
    this.title = bTitle;
    this.author = bAuthor;
    this.Id = Math.floor(Math.random() * 1000000);
  }

  // ensure that the existing storage in memory is loaded into the array
  static collection = JSON.parse(localStorage.getItem('bookStorageArr')) || [];
}

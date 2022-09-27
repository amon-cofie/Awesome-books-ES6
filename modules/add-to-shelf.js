// defining the function that creates the node and adds it to the bookShelf
import { bookShelf } from './app.js';
import { removeBook, removeLocal } from './remove-shelf-and-storage.js';

const addToShelf = (e) => {
  const newAdd = document.createElement('div');
  const bookTag = document.createElement('p');

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('removeBtnStyle');

  bookTag.innerText = `"${e.title}" by ${e.author}`;

  removeBtn.innerText = 'Remove';
  newAdd.appendChild(bookTag);
  newAdd.classList.add('book-shelf-layout');
  newAdd.appendChild(removeBtn);
  newAdd.id = e.Id;
  bookShelf.appendChild(newAdd);
  newAdd.classList.add('darker-background');

  // adding the event listener to the remove button of each book
  removeBtn.addEventListener('click', () => {
    removeBook(newAdd);

    removeLocal(e.Id);
  });
};

export default addToShelf;

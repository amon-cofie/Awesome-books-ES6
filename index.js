import { form, addBookSection, contactUs } from './modules/app.js';
import { singlePageNavSystem } from './modules/single-page-function.js';
import populateCollection from './modules/populateCollection.js';
import { DateTime } from './modules/luxon.js';
import createNewBook from './modules/create-new-book-function.js';

addBookSection.classList.add('hidden');
contactUs.classList.add('hidden');

// invoking the function to display the books on screen
populateCollection();

// adding the submit event listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  createNewBook();
  form.reset();
});

singlePageNavSystem();

const dateBox = document.querySelector('.date');
const d = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
dateBox.innerText = d.toLocaleString();

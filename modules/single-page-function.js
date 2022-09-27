import { librarySection, addBookSection, contactUs } from './app.js';

const nav1 = document.querySelector('.nav-1 button');
const nav2 = document.querySelector('.nav-2 button');
const nav3 = document.querySelector('.nav-3 button');

export const displayList = () => {
  librarySection.classList.remove('hidden');
  addBookSection.classList.add('hidden');
  contactUs.classList.add('hidden');
  nav1.classList.add('selected');
  nav2.classList.remove('selected');
  nav3.classList.remove('selected');
};

export const displayForm = () => {
  librarySection.classList.add('hidden');
  addBookSection.classList.remove('hidden');
  contactUs.classList.add('hidden');
  nav1.classList.remove('selected');
  nav2.classList.add('selected');
  nav3.classList.remove('selected');
};

export const displayContact = () => {
  librarySection.classList.add('hidden');
  addBookSection.classList.add('hidden');
  contactUs.classList.remove('hidden');
  nav1.classList.remove('selected');
  nav2.classList.remove('selected');
  nav3.classList.add('selected');
};

export const singlePageNavSystem = () => {
  nav1.onclick = displayList;
  nav2.onclick = displayForm;
  nav3.onclick = displayContact;
};

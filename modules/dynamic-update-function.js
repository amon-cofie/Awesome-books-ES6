// defining a dynamic update function for the local storage
const dynamicStorageUpdate = (storeArr) => {
  localStorage.setItem('bookStorageArr', JSON.stringify(storeArr));
};

export default dynamicStorageUpdate;

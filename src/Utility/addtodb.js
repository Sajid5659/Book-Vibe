const getStoredBook = () => {
  const storedBookStr = localStorage.getItem("readList");
  if (storedBookStr) {
    return JSON.parse(storedBookStr);
  } else {
    return [];
  }
};

const getWishedBook = () => {
  const wishedBookStr = localStorage.getItem("wishList");
  if (wishedBookStr) {
    return JSON.parse(wishedBookStr);
  } else {
    return [];
  }
};

const addToStoredDb = (id) => {
  const storeBookData = getStoredBook();
  const wishListData = getWishedBook();

  // Check if it's already in wishList
  if (wishListData.includes(id)) {
    alert("This book is already in your Wishlist. Remove it before adding to Readlist.");
    return;
  }

  // Check if it's already in readList
  if (storeBookData.includes(id)) {
    alert("Already exists in Readlist");
  } else {
    storeBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storeBookData));
    alert("Book added to Readlist");
  }
};

const addToWishedDb = (id) => {
  const wishedBookData = getWishedBook();
  const readListData = getStoredBook();

  // Check if it's already in readList
  if (readListData.includes(id)) {
    alert("This book is already in your Readlist. Remove it before adding to Wishlist.");
    return;
  }

  // Check if it's already in wishList
  if (wishedBookData.includes(id)) {
    alert("Already exists in Wishlist");
  } else {
    wishedBookData.push(id);
    localStorage.setItem("wishList", JSON.stringify(wishedBookData));
    alert("Book added to Wishlist");
  }
};

export { addToStoredDb, getStoredBook, addToWishedDb, getWishedBook };

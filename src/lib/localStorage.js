function loadFromLocal(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
  }
}

function saveToLocal(key, data) {
  localStorage.setItem(key.JSON.stringyfy(data));
}

export { loadFromLocal, saveToLocal };

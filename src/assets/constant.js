const WATCHED_KEY = "watched";

export const getWatched = () => {
  const watchedItems = JSON.parse(localStorage.getItem(WATCHED_KEY)) || [];
  return watchedItems;
};

export const addWatched = (itemId) => {
  const watchedItems = getWatched();
  watchedItems.push(itemId);
  localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedItems));
};

export const removeWatched = () => {
  localStorage.removeItem(WATCHED_KEY);
};

export default WATCHED_KEY;

/**
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether `song` is in `playlist`
 * @returns `false` if `playlist` is empty
 */
export function isSongInPlaylist(playlist, song) {
  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} numbers
 * @returns {boolean} whether all `numbers` are even
 * @returns `undefined` if `numbers` is empty
 */
export function isAllEven(numbers) {
  // return undefined if the array is empty
  if (numbers.length === 0) {
    return undefined;
  }

  // Check each number to see if it's divisible by 2.
  for (const number of numbers) {
    if (number % 2 !== 0) {
      return false;
    }
  }
  return true;
}

/**
 * You're in charge of a group camping trip. You've packed supplies in a backpack,
 * and each item in the backpack has a category, such as "food", "equipment", or "clothes".
 * Each item in the "food" category is enough to feed one person.
 *
 * @param {{category: string}[]}} backpack
 * @param {number} people
 * @returns {boolean} whether there is enough food in the backpack to feed everyone
 */
export function haveEnoughFood(backpack, people) {
  // Initialize food counter
  let foodCount = 0;

  // Count the food items in the backpack
  for (const item of backpack) {
    if (item.category === "food") {
      foodCount++;
    }
  }
  return foodCount >= people;
}

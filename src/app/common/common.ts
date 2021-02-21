/**
 * Return a random element from a given array
 * @param array
 * @returns {*}
 */
export function getRandomFromArray(array: any[]) {
  return array[Math.floor((Math.random() * array.length))];
}

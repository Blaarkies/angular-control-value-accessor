/**
 * Return a random element from a given array
 * @param array
 * @returns {*}
 */
export function getRandomFromArray<T>(array: T[]): T {
  return array[Math.floor((Math.random() * array.length))];
}

/***
 * Returns a random integer {0-max} (inclusive)
 * @param max
 * @returns {number}
 */
export function getRandomInteger(max: number = 9): number {
  return Math.round(Math.random() * max);
}

/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    if (n <= 0) {
      return 0;
    }
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  // Return NaN if n is not a number, undefined if n is negative, and 1 if n is 0
  let product = 1;
  if (typeof n !== "number") return NaN;
  if (n < 0) return undefined;
  if (n === 0) return 1;

  // Calculates factorial for positive n
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  // Creates an empty array and checks each number if it's valid to add to the array.
  const result = [];
  if (typeof n !== "number") return null;
  if (n <= 0) return result;

  // Builds the array for positive n.
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  const stringLengths = [];

  for (let i = 0; i < strings.length; i++) {
    stringLengths.push(strings[i].length);
  }
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // Counts the number of students present.
  let count = 0;
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i]) count++;
  }
  return count;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // Creates an object to map each nucleobase to its complement.
  const complements = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  // Guard: Check if input is a string.
  if (typeof dna !== "string") {
    return null;
  }

  // Converts the srtring into an array to modify each character.
  dna = dna.split("");
  for (let i = 0; i < dna.length; i++) {
    if (complements.hasOwnProperty(dna[i])) {
      dna[i] = complements[dna[i]];
    }
  }
  return dna.join("");
}

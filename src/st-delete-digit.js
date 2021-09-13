import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = n.toString().split("").map(elem => +elem);
  if (arr.length <= 2) return Math.max(...arr);
  let idx = arr.findIndex((elem, i, arr) => {
    return (elem === Math.max(...arr) && (i - 1 >= 0) && (arr.indexOf(elem, i + 1) === -1));
  });
  arr.splice(idx - 1, 1);
  return +arr.join("");
}

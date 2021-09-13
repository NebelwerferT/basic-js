import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let o1 = {};
  let o2 = {};
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (o1[s1[i]] === undefined) o1[s1[i]] = 0;
    o1[s1[i]]++;
  }
  for (let i = 0; i < s2.length; i++) {
    if (o2[s2[i]] === undefined) o2[s2[i]] = 0;
    o2[s2[i]]++;
  }
  for (let key in o1) {
    if (o2[key] !== undefined) count += Math.min(o1[key], o2[key]);
  }
  return count;
}

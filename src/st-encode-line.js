import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let resStr = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (i !== str.length - 1) {
      if (str[i] === str[i + 1]) count++;
      else {
        resStr += (count>1) ? count + str[i] : str[i];
        count = 1;
      }
    } else if (i === str.length - 1) {
      if (str[i] === str[i - 1]) resStr += count + str[i];
      else {
        resStr += str[i];
      }
    }
  }
  return resStr;
}

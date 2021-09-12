import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const ctrlSeq = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
  let lastIdx;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (ctrlSeq.includes(arr[i])) {
      switch (arr[i]) {
        case ctrlSeq[0]:
          if (!arr[i+1] || lastIdx === i+1) break;
          lastIdx = i+1;
          break;
        case ctrlSeq[1]:
          if (!arr[i-1] || lastIdx === i-1) break;
          arr2.pop();
          lastIdx = i-1;
          break;
        case ctrlSeq[2]:
          if (!arr[i+1] || lastIdx === i+1) break;
          arr2.push(arr[i+1]);
          break;
        case ctrlSeq[3]:
          if (!arr[i-1] || lastIdx === i-1) break;
          arr2.push(arr[i-1]);
          break;
      }
    } else if (lastIdx !== i) arr2.push(arr[i]);
  }
  return arr2;
}

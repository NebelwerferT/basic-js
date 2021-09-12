import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let repCount = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;
  if (repCount <= 0) return str;
  let sepStr = "";
  let resSepStr = "";
  let separator = "";
  let resStr = str;
  let addSep = "";
  sepStr += (options.addition !== undefined) ? `${options.addition}` : "";
  resSepStr += sepStr;
  if (options.additionRepeatTimes > 0) {
    addSep += (options.additionSeparator !== undefined) ? `${options.additionSeparator}` : "|";
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      resSepStr += addSep + sepStr;
    }
  }
  separator = (options.separator !== undefined) ? `${options.separator}` : "+";
  resStr += resSepStr;
  for (let i = 1; i < repCount; i++) {
    resStr += separator + str + resSepStr;
  }
  return resStr;
}
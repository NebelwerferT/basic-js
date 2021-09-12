import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  if (domains.length === 0) return {};
  const arr = domains.map(elem => elem.split(".").map(elem => "." + elem).reverse());
  const domainZone = "." + domains[0].split(".").pop();
  const obj = {};
  let curPath;
  arr.forEach(elem => {
    curPath = domainZone;
    for (let i = 1; i < elem.length; i++) {
      if (elem[i] === domainZone) continue;
      curPath += elem[i];
      (obj[curPath] === undefined) ? obj[curPath] = 1 : obj[curPath]++;
    }
  });
  obj[domainZone] = Object.values(obj).length;
  return obj;
}
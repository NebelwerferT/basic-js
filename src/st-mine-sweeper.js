import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let graph = {}; let resArr = [];
  matrix.forEach((elem, i) => (elem.forEach((elem2, j) => {graph[`${i};${j}`] = elem2;})));
  for (let key in graph) {
    let sum = 0;
    let [row, column] = [...key.split(";").map(elem => +elem)];
    if (graph[`${row};${column + 1}`] === true) sum++;
    if (graph[`${row};${column - 1}`] === true) sum++;
    if (graph[`${row + 1};${column}`] === true) sum++;
    if (graph[`${row - 1};${column}`] === true) sum++;
    if (graph[`${row + 1};${column + 1}`] === true) sum++;
    if (graph[`${row - 1};${column - 1}`] === true) sum++;
    if (graph[`${row + 1};${column - 1}`] === true) sum++;
    if (graph[`${row - 1};${column + 1}`] === true) sum++;
    if(resArr.length - 1 < row) resArr.push([]);
    resArr[row][column] = sum;
  }
  return resArr;
}

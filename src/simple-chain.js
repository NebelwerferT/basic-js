import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  length: 0,
  getLength() {
    return this.length;
  },
  addLink(value) {
    value = (typeof (value) !== undefined) ? `${value}` : "";
    if (this.length === 0) this.chain = `( ${value} )`;
    else this.chain += `~~( ${value} )`;
    this.length++;
    return this;
  },
  removeLink(position) {
    if (this.length < position || !(Number.isInteger(position)) || position <= 0) {
      this.finishChain();
      throw new Error("You can\'t remove incorrect link!");
    }
    this.chain = this.chain.split("~~").filter((elem, i) => i + 1 !== position).join("~~");
    this.length--;
    return this;
  },
  reverseChain() {
    if (this.length !== 0) this.chain = this.chain.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    const removedChain = this.chain;
    delete this.chain;
    this.length = 0;
    return removedChain;
  }
};

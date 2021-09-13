import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(type) {
    this.type = (type === false);
    this.aplhabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(msg, key) {
    const action = "ENC";
    return this.process(action, msg, key);
  }
  decrypt(msg, key) {
    const action = "DEC";
    return this.process(action, msg, key);
  }
  process(action, msg, key) {
    this.validation(msg, key);
    let resKey, resMsg;
    [msg, key] = [...[msg, key].map(elem => elem.toUpperCase())];
    resKey = this.prepare(msg, key);
    resMsg = this.getResMsg(action, msg, resKey);
    return (this.type) ? (resMsg.split("").reverse().join("")) : (resMsg);
  }
  validation(msg, key) {
    if (!msg || !key) throw new Error("Incorrect arguments!");
  }
  prepare(msg, key) {
    let resKey = "";
    for (let i = 0, j = 0; i < msg.length; i++) {
      if (this.aplhabet.indexOf(msg[i]) === -1) {
        resKey += msg[i];
        continue;
      }
      if (j >= key.length) j = 0;
      resKey += key[j];
      j++;
    }
    return resKey;
  }
  getResMsg(action, msg, resKey) {
    let resMsg = "";
    let shift, than, dif;
    if (action === "ENC") { than = this.aplhabet.length; dif = 0 }
    else if (action === "DEC") { than = 0; dif = this.aplhabet.length }
    for (let i = 0; i < msg.length; i++) {
      if (this.aplhabet.indexOf(msg[i]) === -1) {
        resMsg += msg[i];
        continue;
      }
      if (action === "ENC") {
        shift = this.aplhabet.indexOf(msg[i]) + this.aplhabet.indexOf(resKey[i]);
      } else if (action === "DEC") {
        shift = this.aplhabet.indexOf(msg[i]) - this.aplhabet.indexOf(resKey[i]);
      }
      if (shift < than) {
        resMsg += this.aplhabet[shift + dif];
        continue;
      }
      resMsg += this.aplhabet[shift - than];
    }
    return resMsg;
  }
}

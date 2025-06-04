const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./cryptoHash");

class Block {
  constructor({ data, hash, lastHash, timeStamp }) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
    this.timeStamp = timeStamp;
  }
  static genesis() {
    return new this(GENESIS_DATA);
  }

  static minedBlock({ lastBlock, data }) {
    const timeStamp = Date.now();
    const lastHash = lastBlock.hash;
    const newBlock = new Block({
      lastHash,
      data,
      timeStamp,
      hash: cryptoHash(timeStamp, data, lastHash),
    });
    return newBlock;
  }
}

module.exports = Block;

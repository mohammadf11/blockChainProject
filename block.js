const { GENESIS_DATA } = require("./config");

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
    const newBlock = new Block({
      lastHash: lastBlock.hash,
      data,
      timeStamp: Date.now(),
    });
    return newBlock;
  }
}

module.exports = Block;

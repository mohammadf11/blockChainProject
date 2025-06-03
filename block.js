class Block {
  constructor({ data, hash, lastHash, timeStamp }) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
    this.timeStamp = timeStamp;
  }
}

module.exports = Block;

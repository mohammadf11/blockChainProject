class Block {
  constructor(data, hash, lastHash) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}

class BlockChain {
  constructor() {
    const genesis = new Block("gen-data", "gen-hash", "gen-lastHash");
    this.chain = [];
    this.chain.push(genesis);
  }

  addBlock(data) {
    const lastHash = this.chain[this.chain.length - 1].hash;
    const hash = hashFunction(data + lastHash);
    const newBlock = new Block(data, hash, lastHash);
    this.chain.push(newBlock);
    return newBlock;
  }
}

const hashFunction = (input) => {
  return "*" + input + "*";
};
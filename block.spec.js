const Block = require("./block");
const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./cryptoHash");

describe("Block", () => {
  const timeStamp = "123456";
  const hash = "foo-hash";
  const lastHash = "foo-lastHash";
  const data = "data";
  const newBlock = new Block({
    timeStamp,
    hash,
    lastHash,
    data,
  });
  it("has a timeStamp, lastHash , hash and data property", () => {
    expect(newBlock.timeStamp).toEqual(timeStamp);
    expect(newBlock.hash).toEqual(hash);
    expect(newBlock.lastHash).toEqual(lastHash);
    expect(newBlock.data).toEqual(data);
  });

  describe("genesis()", () => {
    const genesis = Block.genesis();
    it("retuen instance of Block class", () => {
      expect(genesis instanceof Block).toEqual(true);
    });
    it("retuen the genesis data", () => {
      expect(genesis).toEqual(GENESIS_DATA);
    });
  });

  describe("minedBlock()", () => {
    const lastBlock = Block.genesis();
    const data = "data";
    const minedBlock = Block.minedBlock({ lastBlock, data });

    it("returns a block instance", () => {
      expect(minedBlock instanceof Block).toEqual(true);
    });

    it("set the `lastHash` to the `hash` of lastBlock", () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it("sets the `data`", () => {
      expect(minedBlock.data).toEqual(data);
    });

    it("sets the `timeStamp`", () => {
      expect(minedBlock.timeStamp).not.toEqual(undefined);
    });

    it("creates a SHA-256 `hash` based on the proper inputs", () => {
      expect(minedBlock.hash).toEqual(
        cryptoHash(minedBlock.timeStamp, minedBlock.lastHash, minedBlock.data)
      );
    });
  });
});

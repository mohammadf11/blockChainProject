const Block = require("./block")

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
});


import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();
describe("HelloWorld", function () {
  it("Should return 'Hello, Zdk!' when calling sayHello()", async function () {
    const helloWorld = await ethers.deployContract("HelloWorld");
    expect(await helloWorld.sayHello("Hello, World!")).to.equal("Hello, World!");
  })
});

describe("HelloZhao", function () {

  it("should return Hello, Zdk", async function() {
    const ctr = await ethers.getContractFactory("HelloWorld");
    const hello = await ctr.deploy();
    await hello.waitForDeployment();
    expect(await hello.sayHello("Hello, Zdk")).to.equal("Hello, Zdk");
  })


});

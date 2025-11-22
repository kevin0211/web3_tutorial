import "@nomicfoundation/hardhat-ethers";
import { network } from "hardhat";

const { ethers } = await network.connect({
    // network: "localhost",
});


async function deploy() {
    const ctr =  await ethers.getContractFactory("HelloWorld");
    console.log("deploying contract...");
    const hello = await ctr.deploy();
    await hello.waitForDeployment();

    console.log("contract deployed to:", hello.target);


    return hello;
}


async function sayHello(hello: any, content: string) {
    console.log(await hello.sayHello(content));
}

deploy().then(ctr => sayHello(ctr, "hello from deploy script"));


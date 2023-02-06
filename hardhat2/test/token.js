const {expect} =require("chai");

describe("Token contract", function(){

    it("Deployment should assign total supply of tokens to the owner",async function(){
        const [owner]=await ethers.getSigners();
        console.log("Signers object: ",owner);
        const Token=await ethers.getContractFactory("Token");

        const hardhatToken=await Token.deploy();
        const ownerBalance=await hardhatToken.balanceOf(owner.address);
        console.log("Owner Address: ",owner.address);

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance)
    });
    it("Should transfer tokens between accounts",async function(){
        const [owner,addr1,addr2]=await ethers.getSigners();
        const Token=await ethers.getContractFactory("Token");
        const hardhatToken=await Token.deploy();
        await hardhatToken.transfer(addr1.address,10);
        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10);
        await hardhatToken.connect(addr1).transfer(addr2.address,5);
        expect(await hardhatToken.balanceOf(addr2.address)).to.equal(5);
    });

});
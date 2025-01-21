async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const KYC = await ethers.getContractFactory("KYC");
  const kyc = await KYC.deploy();
  console.log("KYC contract deployed to:", kyc.address);

  const Compliance = await ethers.getContractFactory("Compliance");
  const compliance = await Compliance.deploy();
  console.log("Compliance contract deployed to:", compliance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

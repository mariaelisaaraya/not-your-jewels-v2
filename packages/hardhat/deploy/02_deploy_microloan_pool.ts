import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployMicroLoanPool: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MicroLoanPool", {
    from: deployer,
    log: true,
    autoMine: true,
  });
};

export default deployMicroLoanPool;
deployMicroLoanPool.tags = ["MicroLoanPool"];

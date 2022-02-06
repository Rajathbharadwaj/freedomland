import Moralis from "moralis/dist/moralis.min.js";
import Web3 from "web3";
import { contractAddress, kycAbi } from "../../config";
import contractABIkyc from "../../config/kyc-abi.json";

const kyc = async (data, user) => {
  console.log(contractAddress);
  // console.log(kycAbi);
  console.log("data file: ", data.files[0].hash);

  // const options = {
  //   chain: "mumbai",
  //   address: contractAddress,
  //   contractAddress: contractAddress,
  //   function_name: "createDoc",
  //   functionName: "createDoc",
  //   abi: kycAbi,
  //   params: {
  //     docURI: data.files[0].hash,
  //     isRent: data.isRent,
  //     value: data.value,
  //     latLong: "123.123,123.123",
  //   },
  // };
  const options = {
    chain: "mumbai",
    contractAddress: contractAddress,
    functionName: "createDoc",
    abi: kycAbi,
    msgValue: Moralis.Units.ETH("0.000001"),
    params: {
      docURI: data.files[0].hash,
      isRent: data.isRent,
      value: data.value,
      latLong: "123.123,123.123",
    },
  };
  await Moralis.enableWeb3();
  const web3Js = new Web3(Moralis.provider);
  const account = await web3Js.eth.getAccounts()[0];
  console.log(account);
  const contractInstance = new web3Js.eth.Contract(
    contractABIkyc.abi,
    contractAddress
  );
  // console.log(Moralis.Units.ETH(Number(data.value)));
  contractInstance.methods
    .createDoc(
      data.files[0].hash,
      !!data.isRent,
      Moralis.Units.ETH(Number(data.value)),
      "123.123,123.123"
    )
    .send({ from: account });
  // { value: Moralis.Units.ETH("0.000001"), from: ethereum.selectedAddress }
  // const allowance = await Moralis.executeFunction(options);
  // const allowance = await Moralis.Web3API.native.runContractFunction(options);
  // console.log("allowance : ", allowance);
};
export default kyc;

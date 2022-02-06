import Moralis from "moralis/dist/moralis.min.js";
import kyc from "./sellLogic";

const serverUrl = "https://6new31oxnhyo.usemoralis.com:2053/server";
const appId = "6T1zypaV0NTQ6h53jzRqLRi9AvFDZTXQTbe4rULi";
Moralis.start({ serverUrl, appId });

function SellComponent() {
  const promises = [];
  const submitForm = async (event) => {
    event.preventDefault();
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate();
    }
    console.log("logged in user:", user);

    const data = new FormData(event.target);
    const docsArray = Array.from(event.target["doc-1"].files);
    const picArray = Array.from(event.target["pic-1"].files);
    console.log("isRented : ", data.get("isRent"));
    console.log("value : ", data.get("value"));
    if (false) {
      // if (docsArray?.length == 0 || picArray?.length == 0) {
      console.log("a file and a picture are required");
      alert("a file and a picture are required");
      return;
    }
    const fileDataArray = [];
    const uploadData = docsArray.concat(picArray);
    // console.log(docsArray);
    uploadData.map(async (iFile) => {
      promises.push(
        new Promise(async (resolve, reject) => {
          let MoralisFile = new Moralis.File(iFile.name, iFile);
          await MoralisFile.saveIPFS();
          // console.log(MoralisFile);
          // console.log("link: ", MoralisFile.ipfs());
          // console.log("hash: ", MoralisFile.hash());
          fileDataArray.push({
            hash: MoralisFile.hash(),
            link: MoralisFile.ipfs(),
          });
          resolve();
        })
      );
    });
    await Promise.all(promises);
    // console.log(fileDataArray);
    // console.log("isRented : ", data.get("isRent"));
    // console.log("value : ", data.get("value"));
    const formData = {
      isRent: data.get("isRent"),
      value: data.get("value"),
      files: fileDataArray,
    };
    console.log(formData);

    kyc(formData, user);
  };
  return (
    <>
      <div className="container m-2 border-4 border-blue-100 p-2">
        <div className="heading">
          <h2 className="text-center text-2xl text-violet-500 underline">
            Mint NFT By Verifying A Asset In Realworld
          </h2>
        </div>
        <div className="form m-4 flex justify-center">
          <form className="m-20 flex flex-col border p-5" onSubmit={submitForm}>
            <label htmlFor="doc-1" className="flex p-2">
              Select Documents :
              <input type="file" name="doc-1" id="doc-1" multiple />
            </label>
            <label htmlFor="pic-1" className="flex p-2">
              Select Picture: &nbsp;
              <input type="file" name="pic-1" id="pic-1" />
            </label>

            <label htmlFor="sell" className="p-2">
              sell : &nbsp;
              <input
                type="radio"
                name="isRent"
                id="sell"
                defaultChecked
                value="0"
              />
            </label>

            <label htmlFor="rent" className="p-2">
              Rent : &nbsp;
              <input type="radio" name="isRent" id="rent" value="1" />
            </label>
            <label htmlFor="doc-1" className="p-2">
              Price : &nbsp;
              <input
                type="number"
                name="value"
                defaultValue="0.001"
                step="0.000001"
                id="price"
                placeholder="0.001"
                className="rounded-md border border-pink-500 bg-transparent p-1 text-indigo-200"
              />
            </label>

            <input
              type="submit"
              value="Submit"
              className="rounded-xl border-2 border-lime-600 p-4  hover:border-fuchsia-600"
              // onClick={(e)=>{e.target.parentNode.}}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default SellComponent;

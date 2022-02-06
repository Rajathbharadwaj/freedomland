function DocumentTileComponent() {
  return (
    <div className="flex flex-row justify-around p-6">
      <span className="px-8">1</span>
      <span className=" px-8">Price 4000 LND</span>
      <button className="px-8 hover:opacity-70">
        <span className="font-semibold text-white">View Documents</span>
      </button>
      <div className="px-16"></div>

      {/* <div className="flex flex-row px-8">
        <button className="pr-4 hover:opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-check2-circle"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
        </button>
        <span>Mint</span>
      </div> */}

      <div className="flex flex-row px-4">
        <button className="pr-4 hover:opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <span>Pending</span>
      </div>
    </div>
  );
}

export default DocumentTileComponent;

import dummyData from "../utils/dummyData";
import { shortAddress } from "../utils/shortAddress";
import useFetch from "../hooks/useFetch";
const Card = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyWord,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyWord });
  return (
    <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-center text-base">
              From: {shortAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-center text-base">
              To: {shortAddress(addressTo)}
            </p>
          </a>
          <p className="text-base text-white text-center">
            Amount: ${amount} ETH
          </p>
          {message && (
            <>
              <br />
              <p className="text-white text-center text-base">
                Message: {message}
              </p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="gif"
          className=" mt-6 w-full h-64 2x:h-96 object-cover rounded-md shadow-lg"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};
const Transaction = ({ currentAccount }) => {
  return (
    <div className="flex gradient-bg-transactions justify-center items-center w-full 2xl:px-20">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-center my-2 text-3xl">
            Lastest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-center my-2 text-3xl">
            Connect your account to see lastest transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {/*Get lastest => reverse array */}
          {[
            dummyData
              .reverse()
              .map((transaction, i) => <Card {...transaction} key={i} />),
          ]}
        </div>
      </div>
    </div>
  );
};

export default Transaction;

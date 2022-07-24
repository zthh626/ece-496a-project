import { useEffect, useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  chain,
  useSendTransaction,
  useContractRead,
  erc721ABI,
} from "wagmi";
import { data } from "../../data";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Bars } from "react-loading-icons";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Countdown from "react-countdown";
import { BigNumber } from "ethers";
import { erc721Abi } from "../../erc721abi";

const Auction = () => {
  const { address, isConnected } = useAccount();

  const { connect } = useConnect({
    connector: new InjectedConnector({ chains: [chain.rinkeby] }),
  });
  const { disconnect } = useDisconnect();
  const [inputValue, setInputValue] = useState(["", "", ""]);
  const [buttonLoading, setButtonLoadind] = useState([false, false, false]);
  const [submittedBid, setSubmittedBid] = useState([false, false, false]);

  const sendTransaction = (i: number) =>
    useSendTransaction({
      request: {
        to: "awkweb.eth",
        value: BigNumber.from("1000000000000000000"), // 1 ETH
      },
      onSettled(data, error) {
        const newButtonLoading = [...buttonLoading];
        newButtonLoading[i] = false;
        submittedBid[i] = true;
        setButtonLoadind(newButtonLoading);
      },
    });

  function bidClicked(i: number, val: any) {
    // if(Date.now() > data.auction.endTime) {

    //   return;
    // }

    const newButtonLoading = [...buttonLoading];
    newButtonLoading[i] = true;
    setButtonLoadind(newButtonLoading);
    // sendTransaction(i);
  }
  function setInputValueForCar(i: number, val: any) {
    const newInputValue = [...inputValue];
    newInputValue[i] = val;
    setInputValue(newInputValue);
  }

  const { data: yo } = useContractRead({
    addressOrName: "0x9F1d984307F1B77F7D9c6FE27472AAbc40aE5683",
    contractInterface: erc721Abi,
    functionName: "balanceOf",
    args: ["0xa65C28fFf3328f99Fe9C7497462D6cebCB83Bec6"],
  });

  useEffect(() => {
    console.log(yo);
  }, [yo]);

  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: {
    hours: any;
    minutes: any;
    seconds: any;
    completed: any;
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div className="w-full bg-[url('/background.png')] bg-no-repeat bg-top bg-cover">
      <div className="flex justify-end p-2">
        {isConnected ? (
          <button
            onClick={() => disconnect()}
            className="bg-blue-500 p-2 rounded-lg"
          >
            Disconnect wallet
          </button>
        ) : (
          <button
            onClick={() => connect()}
            className="bg-blue-500 p-2 rounded-lg"
          >
            Connect wallet
          </button>
        )}
      </div>
      <div className="w-full flex justify-center pt-10 min-h-screen">
        {data.map((item, i) => (
          <div key={i} className="bg-gray-100 p-5 m-5 rounded-lg h-full">
            <img
              src={`${item.image}`}
              alt="item"
              className="w-[350px] h-[275px] rounded-lg"
            />
            <div className="flex-col mt-2 rounded-lg p-2">
              <div className="bg-blue-400 p-2 font-bold text-center mb-1 rounded-lg flex justify-center">
                <div>Time left:</div>
                <Countdown date={Date.now() + 10000} renderer={renderer} />
              </div>
              <div className="bg-yellow-200 p-2 font-bold text-center mb-1 rounded-lg">
                {item.name}
              </div>
              <div className="flex">
                {!isConnected ? (
                  <div className="rounded-lg w-full p-2 bg-gray-900 text-center text-white">
                    Connect wallet to bid
                  </div>
                ) : submittedBid[i] || Date.now() ? (
                  <div>
                    <div className="rounded-lg w-full p-2 bg-gray-900 text-center text-white">
                      Bidding not allowed
                    </div>
                  </div>
                ) : (
                  <>
                    <input
                      type="number"
                      placeholder="input your bid here.."
                      className="p-2 rounded-lg"
                      value={inputValue[i]}
                      onChange={(e) => setInputValueForCar(i, e.target.value)}
                    />
                    <button
                      disabled={buttonLoading[i]}
                      onClick={(e) => bidClicked(i, true)}
                      className="rounded-lg bg-green-400 w-full p-2 hover:bg-gray-900 hover:text-white flex justify-center"
                    >
                      {buttonLoading[i] ? (
                        <Bars
                          style={{
                            height: "20px",
                            width: "20px",
                          }}
                        />
                      ) : (
                        "Bid"
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auction;

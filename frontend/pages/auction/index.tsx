import { useState } from "react";
import { useAccount, useConnect, useDisconnect, chain } from "wagmi";
import { data } from "../../data";
import Confetti from "react-confetti";
import { InjectedConnector } from "wagmi/connectors/injected";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Countdown from "react-countdown";

const Auction = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector({ chains: [chain.rinkeby] }),
  });
  const { disconnect } = useDisconnect();
  const [inputValue, setInputValue] = useState(["", "", ""]);

  function setInputValueForCar(i: number, val: any) {
    const newInputValue = [...inputValue];
    newInputValue[i] = val;
    setInputValue(newInputValue);
  }

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
      <Confetti width={100} height={100} />
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
                ) : (
                  <>
                    <input
                      type="number"
                      placeholder="input your bid here.."
                      className="p-2 rounded-lg"
                      value={inputValue[i]}
                      onChange={(e) => setInputValueForCar(i, e.target.value)}
                    />
                    <button className="rounded-lg bg-green-400 w-full p-2 hover:bg-gray-900 hover:text-white">
                      Bid
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

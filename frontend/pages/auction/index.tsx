import { data } from "../../data";
const Auction = () => {
  return (
    <div className="w-full bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full p-20 flex flex-wrap min-h-screen">
        {data.map((item, i) => (
          <div key={i} className="bg-gray-100 p-5 rounded-lg h-full">
            <img
              src={`${item.image}`}
              alt="item"
              className="w-[350px] h-[200px] rounded-lg"
            />
            <div className="bg--500 flex-col mt-5 rounded-lg p-2">
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div className="flex">
                <input className="rounded-lg" type="number" />
                <button className="rounded-lg bg-green-400 w-full">Bid</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auction;

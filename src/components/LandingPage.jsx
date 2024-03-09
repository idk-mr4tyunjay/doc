import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "something"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && <div className="w-[8vw] h-[6vw] relative-top-[1vw] bg-red-500"></div>}
                  <h1
                    className="uppercase text-[5vw] leading-[7.5vw] tracking-tighter 
                font-['Founders_Grostek'] font-medium"
                  >
                    {item}
                  </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "for public and private companies",
          "ffrom the first pitch to ipo",
        ].map((item, index) => (
          <p
            className="text-md font-light tracking-tight leading-none "
            key={index}
          >
            {item}
          </p>
        ))}

        <div className="start">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase"></div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] order-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

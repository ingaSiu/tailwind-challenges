const Challenge10 = () => {
  return (
    <div>
      {' '}
      <div className=" p-16 rounded-xl bg-white flex flex-col justify-center items-center gap-5 text-indigo-900 font-bold">
        <div className="border border-indigo-400 rounded-full w-[100px] h-[100px] flex flex-col items-center justify-center">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.9"
              stroke="currentColor"
              className="w-10 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <span className="uppercase tracking-wider">Basic</span>
        </div>

        <div className="text-indigo-900 mb-8">
          <div className="flex items-center ">
            <span className="uppercase font-semibold text-md">kr</span>
            <p className="font-bold text-5xl">199</p>
          </div>
          <span className="font-semibold">NOK/MONTH</span>
        </div>

        <div className="text-center font-semibold">
          <button className="border border-indigo-400  text-xl py-2 px-4 rounded-2xl text-center hover:border-none hover:bg-indigo-900 hover:text-white">
            10
          </button>
          <button className="border border-indigo-400  text-xl py-2 px-4 rounded-2xl text-center hover:border-none hover:bg-indigo-900 hover:text-white">
            25
          </button>
          <button className="border border-indigo-400  text-xl py-2 px-4 rounded-2xl text-center hover:border-none hover:bg-indigo-900 hover:text-white">
            50
          </button>
          <button className="border border-indigo-400  text-xl py-2 px-4 rounded-2xl text-center hover:border-none hover:bg-indigo-900 hover:text-white">
            100
          </button>
          <p className="mt-2 mb-5">Downloads per month</p>
        </div>

        <button className=" w-full py-4 rounded-lg text-lg bg-indigo-900 text-white font-semibold hover:bg-indigo-500">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Challenge10;

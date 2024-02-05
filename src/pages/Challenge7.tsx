const Challenge7 = () => {
  return (
    <>
      <div className="bg-white rounded-2xl p-10">
        <h1 className="text-2xl font-serif font-semibold text-blue-900 mb-5">Payment</h1>

        <div className="flex items-center gap-4">
          <button className="w-[30px] h-[30px] rounded-full border border-blue-900 hover:border-8 hover:w-[40px] hover:h-[40px]"></button>
          <p className="text-blue-900 font-bold text-lg">Card</p>
        </div>

        <div>
          <p className="text-blue-800 ml-10 mt-4 mb-4">Pay with card</p>

          <div className="ml-10">
            <div className="text-blue-800 border border-gray-200 flex gap-2 py-2 px-3 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
              </span>
              <input type="text" placeholder="Card number" className="outline-none placeholder:text-blue-800" />
            </div>

            <div className="flex ">
              <div className="text-blue-800 border border-gray-200 flex gap-2 py-2 px-3">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </i>
                <input type="text" placeholder="mm/dd" className="outline-none placeholder:text-blue-800" />
              </div>

              <div className="text-blue-800 flex border border-gray-200 gap-2 py-2 px-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </span>
                <input type="text" placeholder="CVC" className="outline-none placeholder:text-blue-800" />
              </div>
            </div>

            <div className="text-blue-800 flex  gap-2 items-center mt-4 mb-8">
              <input
                type="checkbox"
                className="appearance-none w-[25px] h-[25px] border-2 border-slate-400 rounded-md cursor-pointer"
              />
              <p>Remember my card</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-4">
            <button className="w-[30px] h-[30px] rounded-full border border-blue-900 hover:border-8 hover:w-[40px] hover:h-[40px]"></button>
            <p className="text-blue-900 font-bold text-lg">Get first. Pay later.</p>
          </div>

          <p className="text-blue-800 ml-12 mb-10">Pay within 30 days</p>
        </div>

        <div>
          <button className="uppercase text-white bg-blue-800 py-6 w-full hover:bg-blue-700 rounded-md">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Challenge7;

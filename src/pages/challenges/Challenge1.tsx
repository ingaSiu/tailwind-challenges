const Challenge1 = () => {
  return (
    <div className="bg-amber-100 flex justify-center items-center min-h-screen">
      <div className="bg-rose-200 rounded-lg ">
        <div className="bg-indigo-200 flex items-center justify-around  gap-3 p-3 rounded-lg ">
          <button className="rounded-full hover:bg-indigo-300 text-2xl p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
          <p className="text-2xl font-bold">Bergen - Budapest</p>
          <button className="rounded-full hover:bg-indigo-300 text-2xl p-2">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-dots"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </button>
        </div>

        <div className="p-3">
          <div className="grid grid-cols-[3rem_1fr] gap-3 ">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-check text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </div>
              <div className="border-r h-full"></div>
            </div>

            <div className="w-full space-y-8">
              <h1 className="text-xl font-bold ">Flight booked</h1>
              <div>
                <h2 className="text-xs">Confirmation code</h2>
                <p className="text-xl font-bold tracking-widest ">678900</p>
              </div>
              <div className="pb-8">
                <button className="uppercase font-semibold rounded-md bg-indigo-200 px-5 py-2 hover:bg-indigo-300">
                  Show booking summary
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[3rem_1fr] gap-3 ">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-check text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </div>
              <div className="border-r h-full"></div>
            </div>

            <div className="w-full space-y-8">
              <div>
                <h1 className="text-xl font-bold ">Preparation</h1>
                <div className="text-sm px-5 py-2 rounded-full bg-emerald-100 hover:bg-emerald-200 w-fit mt-2">
                  Priority
                </div>
              </div>
              <div className="pb-8">
                <button className="uppercase font-semibold rounded-md bg-indigo-200 px-5 py-2 hover:bg-indigo-300">
                  Add services
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[3rem_1fr] gap-3 ">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-check text-green-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </div>
              <div className="border-r h-full"></div>
            </div>

            <div className="w-full space-y-8 pb-12">
              <div>
                <h1 className="text-xl font-bold ">Check-in</h1>
                <p className="text-xs">All Passengers Checked-in</p>

                <div className="flex gap-2">
                  <div className="text-sm px-3 py-2 rounded-full bg-emerald-100 hover:bg-emerald-200 w-fit mt-2">
                    AG
                  </div>
                  <div className="text-sm px-3 py-2 rounded-full bg-emerald-100 hover:bg-emerald-200 w-fit mt-2">
                    II
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[3rem_1fr] gap-3 ">
            <div className="flex flex-col items-center justify-start gap-1">
              <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
              <div className="border-r h-full hidden"></div>
            </div>

            <div className="w-full space-y-8">
              <div>
                <h1 className="text-xl font-bold ">Packing</h1>
                <p className="text-xs max-w-64">You may upgrade your baggage up to three hours before departure</p>
              </div>
              <div className="pb-2">
                <button className="uppercase font-semibold rounded-md bg-indigo-200 px-5 py-2 hover:bg-indigo-300">
                  Add baggage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge1;

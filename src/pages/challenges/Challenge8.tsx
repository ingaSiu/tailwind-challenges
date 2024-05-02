const Challenge8 = () => {
  return (
    <div className="bg-amber-50 flex flex-col md:flex-row gap-10 justify-center items-center min-h-screen">
      <div className="flex items-center gap-10 md:flex-row flex-col">
        <div className="flex flex-col gap-2 justify-end mt-5 rounded-sm">
          <div className="flex justify-end">
            <div className="bg-white cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>

          <div className="bg-white rounded-sm py-4 px-3 shadow-md shadow-amber-600/30">
            <ul className="">
              <li className="p-3 text-orange-800 hover:bg-amber-200">Edit your list</li>
              <li className="p-3 text-orange-800 hover:bg-amber-200">Account settings</li>
              <li className="p-3 text-orange-800 hover:bg-amber-200"> View your profile</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="py-12 pl-12 pr-16 rounded-lg bg-white shadow-md shadow-amber-600/30 ">
            <h1 className="text-2xl font-semibold mb-4">Customize your widget</h1>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <input
                  type="radio"
                  className="appearance-none rounded-full w-[16px] h-[16px] border border-amber-800 checked:outline-2 checked:outline checked:outline-amber-600 checked:bg-orange-600"
                />
                <label htmlFor="" className="text-amber-800">
                  Display Contact Button
                </label>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <input
                  type="radio"
                  className="appearance-none rounded-full w-[16px] h-[16px] border border-amber-800 checked:outline-2 checked:outline checked:outline-amber-600 checked:bg-orange-600"
                />
                <label htmlFor="" className="text-amber-800">
                  Hide email address
                </label>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <input
                  type="radio"
                  className="appearance-none rounded-full w-[16px] h-[16px] border border-amber-800 checked:outline-2 checked:outline checked:outline-amber-600 checked:bg-orange-600"
                />
                <label htmlFor="" className="text-amber-800">
                  Display Publish button
                </label>
              </div>
            </div>

            <div className="flex gap-3 ">
              <button className="py-3 px-8 w-full rounded-lg  bg-slate-100 hover:bg-slate-200">Cancel</button>
              <button className="py-3 px-8 w-full rounded-lg  bg-amber-400 hover:bg-amber-200">Save</button>
            </div>
          </div>

          <div className="py-10 pl-10 pr-16 mb-5 rounded-lg bg-white shadow-md shadow-amber-600/30 ">
            <h1 className="text-2xl font-semibold mb-4 text-orange-800">Other</h1>

            <div className="mb-4 flex md:items-center gap-2 flex-col md:flex-row">
              <input
                type="checkbox"
                className="appearance-none w-[20px] h-[20px]  border border-slate-400 rounded-sm checked:bg-orange-900 checked:outline-double checked:outline-amber-500 checked:border-none checked:outline-4"
              />
              <label htmlFor="" className="text-amber-800">
                Turn on in-app notifications.
              </label>
            </div>

            <div className="mb-4 flex md:items-center gap-2 flex-col md:flex-row">
              <input
                type="checkbox"
                className="appearance-none w-[20px] h-[20px] border border-slate-400 rounded-sm checked:bg-orange-900 checked:outline-double checked:outline-amber-500 checked:border-none checked:outline-4"
              />
              <label htmlFor="" className="text-amber-800">
                Receive weekly newsletters and other offers.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge8;

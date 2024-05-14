const Challenge12 = () => {
  return (
    <div className="bg-violet-50  min-h-screen relative flex items-center justify-center">
      <div className="z-[9999] relative">
        <div className="flex flex-col gap-10 z-50 relative -mt-20">
          <div className="py-20 px-16 rounded-2xl bg-white shadow-2xl mb-[150px] ml-[250px] mt-20 z-10">
            <h1 className="text-violet-600 font-semibold font-serif text-2xl">Create a link</h1>
            <p className="text-violet-700 mb-4">Promote any brand with a simple link</p>

            <div className="text-violet-600">
              <select className="w-full py-3 px-2 bg-inherit rounded-xl border border-slate-400 mb-2">
                <option value="" className="bg-inherit">
                  Premium Themes
                </option>
              </select>
              <input
                type="text"
                placeholder="Enter a website Url"
                className="mb-3 placeholder:text-violet-400 outline-none w-full py-3 px-2 bg-inherit rounded-xl border border-slate-400"
              />
            </div>

            <div className="flex gap-2">
              <button className="py-3 px-4 w-full rounded-xl bg-violet-600 text-white hover:bg-violet-500">
                Create
              </button>
              <button className="py-3 px-4 w-full rounded-xl text-violet-600 hover:bg-violet-100">Advanced</button>
            </div>
          </div>

          <div className="py-20 px-16 rounded-2xl bg-white shadow-2xl -mt-[240px] mr-[200px] z-0">
            <h1 className="text-violet-600 font-semibold  text-2xl mb-3">Promote</h1>
            <p className="text-violet-700 ">Use this link to promote.</p>
            <p className="text-violet-700 text-sm mb-4">Link updates may take up to 5 minutes to propagate</p>

            <div className="text-violet-600 flex gap-2 items-center ">
              <select className="w-1/4 py-3 px-2 bg-inherit rounded-xl border border-slate-400 mb-2">
                <option value="">https://</option>
              </select>
              <input
                type="text"
                placeholder="Premium themes"
                className="mb-4 placeholder:text-violet-600 outline-none w-3/4 py-3 px-2 bg-inherit rounded-xl border border-slate-400"
              />
            </div>

            <div>
              <p className="text-violet-600">Share</p>
              <button className="w-[40px] h-[40px] bg-blue-500 text-white p-2 rounded-lg hover:scale-125 duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pacman "
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
                  <path d="M5.636 5.636a9 9 0 0 1 13.397 .747l-5.619 5.617l5.619 5.617a9 9 0 1 1 -13.397 -11.981z" />
                  <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
                </svg>
              </button>

              <button className="w-[40px] h-[40px]  bg-blue-300 text-white p-2 ml-2 rounded-lg hover:scale-125 duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-cat"
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
                  <path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546z" />
                  <path d="M2 16h5l-4 4" />
                  <path d="M22 16h-5l4 4" />
                  <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M9 11v.01" />
                  <path d="M15 11v.01" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="z-[-9999] absolute left-0 right-0 top-0 bottom-0">
          <div className="border-4 border-violet-400 w-[800px] h-[800px] rounded-full flex justify-center items-center -z-30">
            <div className="border-[16px] border-violet-400 w-[600px] h-[600px] rounded-full flex justify-center items-center -z-40 ">
              <div className=" bg-violet-400 w-[500px] h-[500px] rounded-full -z-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge12;

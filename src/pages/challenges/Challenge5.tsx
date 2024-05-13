const Challenge5 = () => {
  return (
    <div className="bg-violet-100 flex flex-col justify-center items-center min-h-screen gap-10">
      <h1 className="font-bold text-indigo-800 text-3xl p-4">Open positions</h1>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="bg-white rounded-lg flex flex-col items-center gap-5 p-10 shadow-xl">
            <div className="flex gap-2 items-center">
              <div className="bg-gradient-to-r from-violet-400 to-violet-200 p-3 rounded-lg">
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
                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                  />
                </svg>
              </div>
              <h2 className="font-semibold text-xl">Design</h2>
            </div>

            <div>
              <button className="border border-gray-400 px-6 py-2 rounded-lg text-gray-800 font-semibold hover:bg-indigo-900 hover:text-white">
                4 open positions
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg flex flex-col items-center gap-5 p-10 shadow-xl">
            <div className="flex gap-2 items-center">
              <div className=" bg-fuchsia-300 p-3 rounded-lg">
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
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </div>
              <h2 className="font-semibold text-xl">Engineering</h2>
            </div>

            <div>
              <button className="border border-gray-400 px-6 py-2 rounded-lg text-gray-800 font-semibold hover:bg-indigo-900 hover:text-white">
                8 open positions
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg flex flex-col items-center gap-5 p-10 shadow-xl">
            <div className="flex gap-2 items-center">
              <div className="bg-gradient-to-r from-blue-300 to-fuchsia-200 p-3 rounded-lg">
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
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h2 className="font-semibold text-xl">Operations</h2>
            </div>

            <div>
              <button className="border border-gray-400 px-6 py-2 rounded-lg text-gray-800 font-semibold hover:bg-indigo-900 hover:text-white">
                2 open positions
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="bg-white rounded-lg flex flex-col items-center gap-5 p-10 shadow-xl">
            <div className="flex gap-2 items-center">
              <div className="bg-gradient-to-r from-green-200 to-blue-100 p-3 rounded-lg">
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
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <h2 className="font-semibold text-xl">People</h2>
            </div>

            <div>
              <button className="border border-gray-400 px-6 py-2 rounded-lg text-gray-800 font-semibold hover:bg-indigo-900 hover:text-white">
                6 open positions
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg flex flex-col items-center gap-5 p-10 shadow-xl">
            <div className="flex gap-2 items-center">
              <div className="bg-gradient-to-r from-blue-300 to-orange-100 p-3 rounded-lg">
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
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
              </div>
              <h2 className="font-semibold text-xl">Sales</h2>
            </div>

            <div>
              <button className="border border-gray-400 px-6 py-2 rounded-lg text-gray-800 font-semibold hover:bg-indigo-900 hover:text-white">
                7 open positions
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg flex flex-col items-center gap-5 p-10 shadow-xl">
            <div className="flex gap-2 items-center">
              <div className="bg-gradient-to-r from-orange-200 to-violet-200 p-3 rounded-lg">
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
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h2 className="font-semibold text-xl">University</h2>
            </div>

            <div>
              <button className="border border-gray-400 px-6 py-2 rounded-lg text-gray-800 font-semibold hover:bg-indigo-900 hover:text-white">
                8 open positions
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 font-semibold text-center max-w-2xl p-2">
        We are proud to an equal opportunity employer taht values diversity. We do not discriminate on the basis of
        racde, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status or
        disability status.
      </div>
    </div>
  );
};

export default Challenge5;

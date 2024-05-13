const Challenge3 = () => {
  return (
    <div className="bg-pink-50 flex justify-center items-center min-h-screen">
      <div className="bg-white flex gap-8 items-center rounded-lg flex-col md:flex-row shadow-lg shadow-pink-400/50">
        <div className="md:w-2/4 p-4 xs:w-80">
          <img
            className="rounded-lg w-full"
            src="https://images.pexels.com/photos/4329873/pexels-photo-4329873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Cat lying on the bed"
          />
        </div>

        <div className="flex flex-col gap-4  ">
          <h1 className="font-bold text-2xl  mb-4 ">Log in</h1>
          <form>
            <div className="flex flex-col gap-2 mb-2">
              <label className="font-bold text-sm">Email</label>
              <input
                className="px-4 py-2 outline-none border rounded-md "
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="flex flex-col gap-2 mb-3">
              <label className="font-bold text-sm">Password</label>
              <input
                className="px-4 py-2 outline-none border rounded-md"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex flex-col gap-4">
              <button className="px-6 py-3 bg-orange-800 rounded-lg hover:bg-orange-700 text-white shadow-[0_4px_6px_-2px_rgba(251,146,60,0.5)] md:mt-2">
                Log In
              </button>
              <span className="text-gray-500">Or</span>

              <button className="px-6 py-3 md:mb-20 bg-blue-500 hover:bg-blue-400 rounded-lg text-white flex gap-2 shadow-[0_4px_6px_-2px_rgba(29,78,216,0.5)]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-linkedin"
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
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </span>
                Continue with LinkedIn
              </button>
            </div>
          </form>

          <a className="text-sm text-blue-600 font-bold mb-4 md:mb-0" href="#">
            <span className="hover:text-blue-900 hover:underline">Can't log in?</span> &#x2022;{' '}
            <span className="hover:text-blue-900 hover:underline">Sign up for an account</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Challenge3;

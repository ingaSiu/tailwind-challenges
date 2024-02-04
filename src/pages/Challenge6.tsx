const Challenge6 = () => {
  return (
    <>
      <div class="flex flex-col gap-10 md:flex-row justify-center items-center m-10">
        <div class="bg-white flex max-w-lg justify-around py-6 px-2 rounded-2xl items-center">
          <div class="flex flex-col items-center font-semibold rounded-full py-2 px-3 hover:text-white hover:bg-pink-500">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.6"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <span>Home</span>
          </div>

          <div class="flex flex-col items-center font-semibold rounded-full py-2 px-3 hover:text-white hover:bg-pink-500">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </div>
            <span>Cards</span>
          </div>

          <div class="flex flex-col items-center font-semibold rounded-full py-2 px-3 hover:text-white hover:bg-pink-500">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                />
              </svg>
            </div>
            <span>Wallet</span>
          </div>

          <div class="flex flex-col items-center font-semibold rounded-full py-2 px-5 hover:text-white hover:bg-pink-500">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <span>Tax</span>
          </div>

          <div class="flex flex-col items-center font-semibold rounded-full py-2 px-3 hover:text-white hover:bg-pink-500">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <span>Profile</span>
          </div>
        </div>

        <div class="bg-orange-400 p-10 rounded-2xl max-w-md">
          <div class="flex justify-between">
            <p class="text-white text-xl font-semibold">Frequent payments</p>
            <span class="text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </span>
          </div>

          <div class="flex gap-4 justify-center ">
            <div>
              <img
                class="rounded-[100%] object-cover w-[70px] h-[70px] border-4 border-pink-600 cursor-pointer"
                src="https://cdn.pixabay.com/photo/2018/05/08/17/11/dog-3383461_960_720.jpg"
                alt="profile img"
              />
            </div>

            <div>
              <img
                class="rounded-[100%] object-cover w-[70px] h-[70px] border-4 border-pink-600 cursor-pointer"
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile img"
              />
            </div>

            <div>
              <img
                class="rounded-[100%] object-cover w-[70px] h-[70px] border-4 border-pink-600 cursor-pointer"
                src="https://images.unsplash.com/photo-1580064755419-883acc42900b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile img"
              />
            </div>

            <div>
              <img
                class="rounded-[100%] object-cover w-[70px] h-[70px] border-4 border-pink-600 cursor-pointer"
                src="https://images.unsplash.com/photo-1619476006517-75d535a84652?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile img"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-10 md:flex-row md:items-center m-10">
        <div class="bg-white max-w-lg rounded-xl text-center p-10 text-pink-700 flex flex-col gap-5">
          <div>
            <p class="text-slate-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, adipisci culpa. Explicabo ipsam
              molestias iusto neque deserunt aperiam alias molestiae laudantium totam, odit laboriosam est tenetur
              praesentium ratione quibusdam quis?
            </p>
          </div>

          <div class="flex justify-between">
            <button class="border border-pink-600 rounded-3xl py-2 px-5 hover:bg-pink-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>

            <div class="flex justify-center items-center gap-2 text-pink-700">
              <button class="w-[10px] h-[10px] rounded-[1000px] bg-pink-200 hover:bg-pink-700 hover:border-pink-200 hover:border-2"></button>
              <button class="w-[10px] h-[10px] rounded-[1000px] bg-pink-200 hover:bg-pink-700 hover:border-pink-200 hover:border-2"></button>
              <button class="w-[10px] h-[10px] rounded-[1000px] bg-pink-200 hover:bg-pink-700 hover:border-pink-200 hover:border-2"></button>
              <button class="w-[10px] h-[10px] rounded-[1000px] bg-pink-200 hover:bg-pink-700 hover:border-pink-200 hover:border-2"></button>
            </div>

            <button class="border border-pink-600 rounded-3xl py-2 px-5 hover:bg-pink-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl max-w-lg ">
          <div class="flex justify-between">
            <div class=" rounded-tl-2xl w-full ">
              <div class="flex justify-end mt-2 text-slate-700 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                  <path
                    fill-rule="evenodd"
                    d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div class="py-6 px-10 flex flex-col justify-center items-center gap-2">
                <img
                  class="rounded-[100%] object-cover w-[70px] h-[70px] border-4 border-pink-600 cursor-pointer"
                  src="https://images.unsplash.com/photo-1619476006517-75d535a84652?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile img"
                />
                <p class="font-semibold text-slate-800">Red Pandashian</p>
                <p class="text-sm text-gray-500">@pandai</p>
                <button class="rounded-3xl py-2 px-3 text-white text-sm font-semibold bg-gradient-to-r from-pink-400 to-violet-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-400">
                  Add Contact
                </button>
              </div>
            </div>

            <div class="  w-full  rounded-tr-2xl">
              <div class="flex justify-end  text-slate-700 mt-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                  <path
                    fill-rule="evenodd"
                    d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div class="py-6 px-10 flex flex-col justify-center items-center gap-2">
                <img
                  class="rounded-[100%] object-cover w-[70px] h-[70px] border-4 border-pink-600 cursor-pointer"
                  src="https://images.unsplash.com/photo-1580064755419-883acc42900b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile img"
                />
                <p class="font-semibold text-slate-800">Akita Kyun</p>
                <p class="text-sm text-gray-500">@samuraiboy</p>
                <button class="rounded-3xl py-2 px-3 text-white text-sm font-semibold bg-gradient-to-r from-pink-400 to-violet-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-400">
                  Add Contact
                </button>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class=" w-full  rounded-bl-2xl">
              <div class="flex justify-end  text-slate-700 mt-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                  <path
                    fill-rule="evenodd"
                    d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="py-6 px-10 flex flex-col justify-center items-center gap-2 ">
                <img
                  class="rounded-[100%] object-cover w-[70px] h-[70px] border-4 border-pink-600 cursor-pointer"
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile img"
                />
                <p class="font-semibold text-slate-800">Luna Cato</p>
                <p class="text-sm text-gray-500">@nyanko</p>
                <button class="rounded-3xl py-2 px-3 text-white text-sm font-semibold bg-gradient-to-r from-pink-400 to-violet-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-400">
                  Add Contact
                </button>
              </div>
            </div>

            <div class="  w-full  rounded-br-2xl ">
              <div class="flex justify-end  text-slate-700 mt-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                  <path
                    fill-rule="evenodd"
                    d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="py-6 px-10 flex flex-col justify-center items-center gap-2 ">
                <img
                  class="rounded-[100%] object-cover w-[70px] h-[70px] border-4 border-pink-600 cursor-pointer"
                  src="https://cdn.pixabay.com/photo/2018/05/08/17/11/dog-3383461_960_720.jpg"
                  alt="profile img"
                />
                <p class="font-semibold text-slate-800">Shibe Wan</p>
                <p class="text-sm text-gray-500">@shibireru</p>
                <button class="rounded-3xl py-2 px-3 text-white text-sm font-semibold bg-gradient-to-r from-pink-400 to-violet-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-400">
                  Add Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenge6;

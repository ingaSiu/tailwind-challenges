const Challenge2 = () => {
  return (
    <div className="bg-gray-200 grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_1fr] min-h-screen gap-12 md:gap-16 box-border">
      <div className="bg-sky-900 w-full h-full font-bold text-purple-400 p-10">
        <ul className="flex flex-col gap-20  py-5 h-full  ">
          <li className="hover:text-red-300 rotate-[270deg] duration-300 py-5 w-full flex items-center justify-center cursor-pointer before:border-b">
            Home
          </li>
          <li className="hover:text-red-300 rotate-[270deg] duration-300 py-5 w-full flex items-center justify-center cursor-pointer">
            About
          </li>
          <li className="hover:text-red-300 rotate-[270deg] duration-300 py-5 w-full flex items-center justify-center cursor-pointer">
            Exhibits
          </li>
          <li className="hover:text-red-300 rotate-[270deg] duration-300 py-5 w-full flex items-center justify-center cursor-pointer">
            Group Visits
          </li>
          <li className="hover:text-red-300 rotate-[270deg] duration-300 py-5 w-full flex items-center justify-center cursor-pointer">
            Contact
          </li>
        </ul>
      </div>

      <div className="py-12 pr-12">
        <div className="flex justify-between ">
          <div className="hover:scale-125 duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
          <button className="hover:scale-125 duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
          </button>
        </div>

        <section className="mt-32 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col gap-10 md:gap-20 max-w-80">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-900">Come to your senses</h1>
            <button className=" py-3 px-8 uppercase text-xl border-2 border-sky-900 text-sky-900 hover:bg-sky-900 hover:text-white font-bold">
              View our prices
            </button>
          </div>

          <div className="md:col-span-2 flex items-center justify-start gap-6 h-full overflow-x-auto">
            <div className="h-[30rem] w-[25rem] flex-shrink-0">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
              />
            </div>
            <div className="h-[30rem] w-[25rem] flex-shrink-0">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
              />
            </div>
            <div className="h-[30rem] w-[25rem] flex-shrink-0">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
              />
            </div>
            <div className="h-[30rem] w-[25rem] flex-shrink-0">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
              />
            </div>
            <div className="h-[30rem] w-[25rem] flex-shrink-0">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
              />
            </div>
          </div>
        </section>

        <section className="mt-12 flex gap-10 justify-around flex-col md:flex-row">
          <div className="space-y-3">
            <p className="text-sm text-slate-500 max-w-80">
              "Not just fun, but really cool expierence. Lovely stuff, exited to show you it all and lots of things to
              see and try!"
            </p>
            <p className="font-bold ">River of fever, Nida</p>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-2xl text-sky-900 font-bold px-5 uppercase mb-[-0.75rem]">Working hours</h2>
            <div className="flex gap-10 md:gap-28 p-5 bg-gray-300">
              <div>
                <p className="font-semibold">Monday - Thursday </p>
                <p>10:00 - 22:00</p>
              </div>

              <div>
                <p className="font-semibold">Friday - Saturday </p>
                <p>10:00 - 23:00</p>
              </div>

              <div>
                <p className="font-semibold">Sunday </p>
                <p>10:00 - 22:00</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Challenge2;

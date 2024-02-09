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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            >
              <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
            </svg>
          </div>
          <button className="hover:scale-125 duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            >
              <path d="M12 2c-4.963 0-9 4.038-9 9v8h.051c.245 1.691 1.69 3 3.449 3 1.174 0 2.074-.417 2.672-1.174a3.99 3.99 0 0 0 5.668-.014c.601.762 1.504 1.188 2.66 1.188 1.93 0 3.5-1.57 3.5-3.5V11c0-4.962-4.037-9-9-9zm7 16.5c0 .827-.673 1.5-1.5 1.5-.449 0-1.5 0-1.5-2v-1h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1H8v1c0 1.845-.774 2-1.5 2-.827 0-1.5-.673-1.5-1.5V11c0-3.86 3.141-7 7-7s7 3.14 7 7v7.5z"></path>
              <circle cx="9" cy="10" r="2"></circle>
              <circle cx="15" cy="10" r="2"></circle>
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

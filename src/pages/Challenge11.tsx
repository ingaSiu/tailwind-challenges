import React from 'react';

const Challenge11 = () => {
  return (
    <div>
      {' '}
      <div className="bg-white py-14 pl-10 pr-5 rounded-3xl">
        <div className="flex gap-14 items-center ">
          <h1 className="font-bold text-indigo-900 text-4xl">Groceries</h1>
          <button className="text-indigo-900/70 hover:text-indigo-900 hover:scale-110 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>

        <p className="text-indigo-900/70 mt-2 mb-4">
          Shared with{' '}
          <a href="javascript:void()" className="underline underline-offset-2">
            1 person
          </a>
        </p>

        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 text-indigo-900 font-semibold">
            <input id="eggs" className="peer sr-only" type="checkbox" name="groceries" />
            <label
              for="eggs"
              className="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
            >
              <span className="invisible text-indigo-900/70">✓</span>
            </label>
            <p className="peer-checked:text-indigo-900/70">Eggs</p>
          </div>

          <div className="flex gap-2  text-indigo-900 font-semibold">
            <input id="tomatoes" className="peer sr-only" type="checkbox" name="groceries" />
            <label
              for="tomatoes"
              className="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
            >
              <span className="invisible text-indigo-900/70">✓</span>
            </label>
            <p className="peer-checked:text-indigo-900/70">Tomatoes</p>
          </div>

          <div className="flex gap-2  text-indigo-900 font-semibold mb-4">
            <input id="avocado" className="peer sr-only" type="checkbox" name="groceries" />
            <label
              for="avocado"
              className="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
            >
              <span className="invisible text-indigo-900/70">✓</span>
            </label>
            <p className="peer-checked:text-indigo-900/70 ">Avocado</p>
          </div>

          <div>
            <p className="uppercase tracking-wider text-indigo-900 text-sm mb-2 font-semibold ">Completed (4)</p>

            <div className="flex flex-col gap-2 mb-4">
              <div className="flex gap-2  text-indigo-900 font-semibold">
                <input id="egg_noodles" className="peer sr-only" type="checkbox" name="groceries" checked />
                <label
                  for="egg_noodles"
                  className="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
                >
                  <span className="invisible text-indigo-900/70">✓</span>
                </label>
                <p className="peer-checked:text-indigo-900/70 ">Egg noodles</p>
              </div>

              <div className="flex gap-2 items-center text-indigo-900 font-semibold">
                <input id="scampi" className="peer sr-only" type="checkbox" name="groceries" checked />
                <label
                  for="scampi"
                  className="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
                >
                  <span className="invisible text-indigo-900/70">✓</span>
                </label>
                <p className="peer-checked:text-indigo-900/70 ">Scampi</p>
              </div>

              <div className="flex gap-2 items-center text-indigo-900 font-semibold">
                <input id="orange_juice" className="peer sr-only" type="checkbox" name="groceries" checked />
                <label
                  for="orange_juice"
                  className="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
                >
                  <span className="invisible text-indigo-900/70">✓</span>
                </label>
                <p className="peer-checked:text-indigo-900/70 ">Orange juice</p>
              </div>

              <div className="flex gap-2 items-center text-indigo-900 font-semibold">
                <input id="apples" className="peer sr-only" type="checkbox" name="groceries" checked />
                <label
                  for="apples"
                  className="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
                >
                  <span className="invisible text-indigo-900/70">✓</span>
                </label>
                <p className="peer-checked:text-indigo-900/70 ">Apples</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <button className="bg-indigo-900 text-white rounded-2xl py-2 px-5 hover:bg-indigo-500 hover:shadow-[0px_0px_2px_4px_#A5B4FC] transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-[250px] h-[500px] bg-indigo-50 rounded-3xl -m-56 -z-50"></div>
    </div>
  );
};

export default Challenge11;

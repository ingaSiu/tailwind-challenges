import React from 'react';

const Challenge11 = () => {
  return (
    <div>
      {' '}
      <div class="bg-white py-14 pl-10 pr-5 rounded-3xl">
        <div class="flex gap-14 items-center ">
          <h1 class="font-bold text-indigo-900 text-4xl">Groceries</h1>
          <button class="text-indigo-900/70 hover:text-indigo-900 hover:scale-110 transition-all duration-300">
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
          </button>
        </div>

        <p class="text-indigo-900/70 mt-2 mb-4">
          Shared with{' '}
          <a href="javascript:void()" class="underline underline-offset-2">
            1 person
          </a>
        </p>

        <div class="flex flex-col gap-2 ">
          <div class="flex gap-2 text-indigo-900 font-semibold">
            <input id="eggs" class="peer sr-only" type="checkbox" name="groceries" />
            <label
              for="eggs"
              class="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
            >
              <span class="invisible text-indigo-900/70">✓</span>
            </label>
            <p class="peer-checked:text-indigo-900/70">Eggs</p>
          </div>

          <div class="flex gap-2  text-indigo-900 font-semibold">
            <input id="tomatoes" class="peer sr-only" type="checkbox" name="groceries" />
            <label
              for="tomatoes"
              class="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
            >
              <span class="invisible text-indigo-900/70">✓</span>
            </label>
            <p class="peer-checked:text-indigo-900/70">Tomatoes</p>
          </div>

          <div class="flex gap-2  text-indigo-900 font-semibold mb-4">
            <input id="avocado" class="peer sr-only" type="checkbox" name="groceries" />
            <label
              for="avocado"
              class="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
            >
              <span class="invisible text-indigo-900/70">✓</span>
            </label>
            <p class="peer-checked:text-indigo-900/70 ">Avocado</p>
          </div>

          <div>
            <p class="uppercase tracking-wider text-indigo-900 text-sm mb-2 font-semibold ">Completed (4)</p>

            <div class="flex flex-col gap-2 mb-4">
              <div class="flex gap-2  text-indigo-900 font-semibold">
                <input id="egg_noodles" class="peer sr-only" type="checkbox" name="groceries" checked />
                <label
                  for="egg_noodles"
                  class="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
                >
                  <span class="invisible text-indigo-900/70">✓</span>
                </label>
                <p class="peer-checked:text-indigo-900/70 ">Egg noodles</p>
              </div>

              <div class="flex gap-2 items-center text-indigo-900 font-semibold">
                <input id="scampi" class="peer sr-only" type="checkbox" name="groceries" checked />
                <label
                  for="scampi"
                  class="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
                >
                  <span class="invisible text-indigo-900/70">✓</span>
                </label>
                <p class="peer-checked:text-indigo-900/70 ">Scampi</p>
              </div>

              <div class="flex gap-2 items-center text-indigo-900 font-semibold">
                <input id="orange_juice" class="peer sr-only" type="checkbox" name="groceries" checked />
                <label
                  for="orange_juice"
                  class="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
                >
                  <span class="invisible text-indigo-900/70">✓</span>
                </label>
                <p class="peer-checked:text-indigo-900/70 ">Orange juice</p>
              </div>

              <div class="flex gap-2 items-center text-indigo-900 font-semibold">
                <input id="apples" class="peer sr-only" type="checkbox" name="groceries" checked />
                <label
                  for="apples"
                  class="size-6 rounded-full border border-indigo-900 shrink-0 flex justify-center items-center peer-checked:[&_span]:visible peer-checked:border-indigo-900/70"
                >
                  <span class="invisible text-indigo-900/70">✓</span>
                </label>
                <p class="peer-checked:text-indigo-900/70 ">Apples</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-end">
          <button class="bg-indigo-900 text-white rounded-2xl py-2 px-5 hover:bg-indigo-500 hover:shadow-[0px_0px_2px_4px_#A5B4FC] transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
      <div class="w-[250px] h-[500px] bg-indigo-50 rounded-3xl -m-56 -z-50"></div>
    </div>
  );
};

export default Challenge11;

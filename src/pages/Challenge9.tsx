const Challenge9 = () => {
  return (
    <div class="bg-sky-200 flex flex-col gap-4  justify-center items-center min-h-screen relative">
      <div class=" rounded-lg flex max-w-2xl bg-white absolute top-20 shadow-xl">
        <div class="flex flex-col gap-4 px-10 pt-10 pb-16">
          <h1 class="font-semibold text-2xl">Keep it sporty.</h1>

          <p class="font-semibold max-w-sm">
            Our mission is to change the world through sport. Browse sportwear and shoes
          </p>

          <button class="bg-black text-pink-400 px-4 py-3 md:w-1/2 hover:bg-pink-400 hover:text-black">
            View Collection
          </button>
        </div>

        <div class="rounded-lg w-2/5 ">
          <img
            class="rounded-tr-lg rounded-br-lg w-full h-full object-cover border-l-4 border-pink-500"
            src="https://images.pexels.com/photos/19176002/pexels-photo-19176002/free-photo-of-kitten-running-on-grass-and-leaves-in-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Running cat"
          />
        </div>
      </div>

      <div class="absolute left-96 shadow-xl">
        <div class=" rounded-lg flex max-w-lg max-h-64 bg-white relative">
          <div class="w-2/5">
            <img
              class="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
              src="https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHxkb2clMjB3ZWFyaW5nJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"
              alt="Cute doggo"
            />
          </div>

          <div class="absolute right-4 top-4">
            <div class="bg-pink-300 text-white rounded-md p-2">Sould out</div>
          </div>

          <div class="flex  items-center justify-center pl-5 ">
            <div>
              <h2 class="text-xl mb-2">Air monarch</h2>
              <p class="text-2xl font-semibold">$345</p>
            </div>
          </div>
        </div>
      </div>

      <div class=" rounded-lg bg-white absolute  bottom-40 shadow-xl">
        <div class="p-12 flex  flex-col gap-3 items-center">
          <p class="font-semibold text-xl">Legend essential</p>

          <p class="font-semibold text-2xl mb-4">$345</p>

          <button class="bg-black text-pink-400 px-10 py-3 md:w-full hover:bg-pink-400 hover:text-black">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenge9;

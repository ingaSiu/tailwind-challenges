type ItemProps = {
  title: string;
  text: string;
};

const CarouselItem = ({ title, text }: ItemProps) => {
  return (
    <div className="rounded-lg p-6 flex justify-center items-center gap-4 bg-white shadow-xl">
      <div className="bg-blue-100 rounded-lg p-4 text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-14 h-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <div>
        <div className="max-w-xs">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-indigo-800">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;

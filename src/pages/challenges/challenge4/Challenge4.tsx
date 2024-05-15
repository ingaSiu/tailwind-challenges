import CarouselItem from './CarouselItem';
import { useState } from 'react';

const data = [
  {
    title: 'Search forum',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis cumque cum eos consequatur eaque. Dolorum adipisci ea vitae architecto corrupti accusant',
  },
  {
    title: 'Search forum',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis cumque cum eos consequatur eaque. Dolorum adipisci ea vitae architecto corrupti accusant',
  },
  {
    title: 'Search forum',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis cumque cum eos consequatur eaque. Dolorum adipisci ea vitae architecto corrupti accusant',
  },
  {
    title: 'Search forum',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis cumque cum eos consequatur eaque. Dolorum adipisci ea vitae architecto corrupti accusant',
  },
];

const Challenge4 = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center min-h-screen overflow-x-auto">
      <div className="max-w-xs text-center mb-10">
        <h1 className="font-semibold text-indigo-800 text-4xl">Search educational resources</h1>
      </div>

      <div className="flex justify-center items-center gap-10">
        <button className="bg-white text-gray-600 border border-gray-400 cursor-pointer rounded-full p-4 hover:bg-gray-100 ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        {data.map((item, index) => (
          <CarouselItem key={index} title={item.title} text={item.text} />
        ))}

        <button className="bg-white cursor-pointer text-gray-600 border border-gray-400 rounded-full p-4 hover:bg-gray-100 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="mt-5">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}
          >
            <path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            <path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path>
          </svg>
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}
          >
            <path d="M5 12c0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7zm12 0c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5 5 2.243 5 5z"></path>
          </svg>
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}
          >
            <path d="M5 12c0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7zm12 0c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5 5 2.243 5 5z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Challenge4;

import React from "react";

export default function Example() {
  return (
    <>
      <div className="dropdown inline-block relative mt-5">
        <button className=" text-brand-white-color font-semibold py-2 px-4 rounded inline-flex items-center transition-all text-opacity-80 hover:text-opacity-100">
          <span className="mr-1">Filmler</span>
        </button>
        <ul className="dropdown-menu fixed hidden text-gray-700 pt-1 z-[100] w-72">
          <li className="">
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="/"
            >
              Popüler Filmler
            </a>
          </li>
          <li className="">
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="/"
            >
              Vizyondakiler
            </a>
          </li>
          <li className="">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="/"
            >
              Yakında
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative mt-5">
        <button className="text-brand-white-color font-semibold py-2 px-4 rounded inline-flex items-center transition-all text-opacity-80 hover:text-opacity-100">
          <span className="mr-1">Diziler</span>
        </button>
        <ul className="dropdown-menu fixed hidden text-gray-700 pt-1 z-[100] w-72">
          <li className="">
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="/"
            >
              Popüler Olanlar
            </a>
          </li>
          <li className="">
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="/"
            >
              VizyondakilerName
            </a>
          </li>
          <li className="">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="/"
            >
              Yakında
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative mt-5">
        <button className="text-brand-white-color font-semibold py-2 px-4 rounded inline-flex items-center transition-all text-opacity-80 hover:text-opacity-100">
          <span className="mr-1">Kişiler</span>
        </button>
        <ul className="dropdown-menu fixed hidden text-gray-700 pt-1 z-[100] w-72">
          <li className="">
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="/"
            >
              Popüler Kişiler
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

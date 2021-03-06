import React from "react";

const FreeNavigate = () => {
  return (
    <div>
      <ul className="flex flex-wrap text-normal font-medium text-gray-500 dark:text-gray-400 mt-3">
        <li className="mr-2">
          <a
            href="/"
            className="inline-block py-3 px-4 rounded-xl text-white bg-brand-dark-color active"
            aria-current="page"
          >
            Yeni Gelenler
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FreeNavigate;
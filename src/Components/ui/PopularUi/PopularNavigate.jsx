import React, { useEffect } from "react";

const NavigateBar = ({
  activeGenre,
  setActiveGenre,
  setFiltered,
  popular,
}) => {

  useEffect(()=> {
    if(activeGenre === 0){
      setFiltered(popular);
      return;
    }else {
      const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
      setFiltered(filtered);
    }
  },[activeGenre]);
  return (
    <div>
      <ul className="flex flex-wrap font-bold text-gray-500 dark:text-gray-400 mt-3">
        <li className="mr-2">
          <button
            onClick={() => setActiveGenre(0)}
            className="inline-block py-3 px-4 rounded-xl text-white bg-brand-dark-color active"
            aria-current="page"
          >
            Hepsi
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => setActiveGenre(35 || 12 || 10751 || 16 || 27)}
            className="inline-block py-3 px-4 rounded-xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Komedi
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => setActiveGenre(28 || 10752)}
            className="inline-block py-3 px-4 rounded-xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Aksiyon
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavigateBar;

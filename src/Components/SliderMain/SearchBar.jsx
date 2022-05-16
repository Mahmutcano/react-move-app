import React, { useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import {BiSearch} from 'react-icons/bi'
import {MdOutlineClear} from 'react-icons/md'


const SearchBar = () => {
  const [search, setSearch] = useState([]);
  const [movie, setMovie] = useState([]);
  const API_KEY = "17238172b25c3a589bc302e2e5949b51";

  const searchMovie = async (e) => {
    e.preventDefault();

    const API_URL =
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      API_KEY +
      "&query=" +
      search;


    const {
      data: { results },
    } = await axios.get(API_URL);
    setMovie(results);
  };

  
  console.log(movie);

  const clearInput = () => {
    setSearch([]);
    setMovie("");
  };
  return (
    <>
      <div className="w-[400px] rounded-xl bg-gray-50 p-6">
        <div className="grid gap-y-4">
          <div className="flex gap-x-2">
            <label htmlFor="query" className="flex-1 relative group block">
              <input
                name="query"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                required
                className="h-14 px-4 border-2 border-gray-200 rounded-xl w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Arama Yap
              </span>
            </label>
          </div>
          <button
            onClick={(e) => searchMovie(e)}
            type="submit"
            className="bg-brand-dark-color text-brand-white-color transition-colors hover:bg-primary-brand-color hover:text-white h-12 flex items-center justify-center rounded-xl w-full text-sm font-semibold "
          >
            Ara
          </button>
        </div>
        <div className="">
          {movie.length === 0 ? (
            <BiSearch />
          ) : (
            <MdOutlineClear id="clearBtn" onClick={clearInput} />
          )}
        </div>
        <div className="flex flex-col border-2">
          {movie.map((movie, index) => (
              <div key={movie.id}>
                <h1 className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                  {movie.original_title}
                </h1>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;

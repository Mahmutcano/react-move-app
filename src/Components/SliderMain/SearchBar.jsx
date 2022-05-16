import React, { useEffect, useState } from "react";
import axios from "axios";
import {BiSearch} from 'react-icons/bi'
import {MdOutlineClear} from 'react-icons/md'


const SearchBar = () => {
  const [search, setSearch] = useState([]);
  const [movie, setMovie] = useState("");
  const API_KEY = "17238172b25c3a589bc302e2e5949b51";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";

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

  useEffect((e) => {
    searchMovie(e);
  }, []);

  
  console.log(movie);

  const clearInput = () => {
    setSearch([]);
    setMovie("");
  };

  return (
    <>
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="searchIcon">
          {movie.length === 0 ? (
            <BiSearch onClick={(e) => searchMovie(e)} type="submit" className="transition duration-150 ease-in-out"/>
          ) : (
            <MdOutlineClear id="clearBtn" onClick={clearInput} className="transition delay-150 duration-300 ease-in-out"/>
          )}
        </div>
      </div>
      {movie.length !== 0 && (
        <div className="dataResult z-50">
          {movie.slice(0,4).map((movie, key) => {
            return (
              <div className="flex pl-5 border-2 border-white rounded-lg bg-gray-50 hover:bg-brand-dark-color hover:opacity-300 mt-1 transition duration-150 ease-in-out z-50"  key={movie.id}>
                <div>
                <img
                    src={`${IMAGE_PATH}${movie.poster_path}`}
                    alt="Slider"
                    className="border-2 rounded-[10px] w-7 mt-1"
                  />
                </div>
                <p className="pt-2 px-3 border-1 h-12 text-black">{movie.original_title} </p>
              </div>

            );
          })}
        </div>
      )}
    </div>
    </>
  );
};

export default SearchBar;

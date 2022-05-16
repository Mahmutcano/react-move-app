import { useState, useEffect } from "react";
import Slider from "react-slick";
import Title from "../Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import FreeNavigate from "./FreeNavigate";

function NextBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1`}
      onClick={onClick}
    >
      <IoIosArrowForward size={24} />
    </button>
  );
}

function PrevBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1`}
      onClick={onClick}
    >
      <IoIosArrowBack size={24} />
    </button>
  );
}

export default function FreeCard() {
  // Fetch Data
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "17238172b25c3a589bc302e2e5949b51";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";
  const TV_POPULAR = "/tv/popular";

  const [free, setFree] = useState([]);

  const fetchMoviesFree = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}${TV_POPULAR}?&api_key=${API_KEY}`);
    setFree(results);
  };

  useEffect(() => {
    fetchMoviesFree();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };
  return (
    <div className="container px-10">
      <FreeNavigate />
      <Title>TV+</Title>
      <Slider className="p-10" {...settings}>
        {free.length &&
          free.map((free, index) => (
            <div key={free.id}>
              {free.poster_path ? (
                <picture className="block px-2 hover:opacity-20 cursor-pointer">
                  <img
                    src={`${IMAGE_PATH}${free.poster_path}`}
                    alt="Slider"
                    className="rounded-lg"
                  />
                </picture>
              ) : null}
              <h1 className="text-brand-dark-color text-center mt-2 font-semibold px-6">
                {free.original_title}
              </h1>
            </div>
          ))}
      </Slider>
    </div>
  );
}

import { useState, useEffect } from "react";
import Slider from "react-slick";
import Title from "../Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import NavigateBar from "./PopularNavigate";

function NextBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/3 -right-6 -translate-y-1 hover:opacity-50`}
      onClick={onClick}
    >
      <IoIosArrowForward size={24} />
    </button>
  );
}

function PrevBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/3 -left-6 -translate-y-1 hover:opacity-50`}
      onClick={onClick}
    >
      <IoIosArrowBack size={24} />
    </button>
  );
}

export default function Card() {
  // Fetch Data
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "17238172b25c3a589bc302e2e5949b51";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";

  const [populars, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchMoviesPopular = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie?&api_key=${API_KEY}`);
    setPopular(results);
    setFiltered(results);
  };

  useEffect(() => {
    fetchMoviesPopular();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };
  return (
    <div className="container px-10">
      <NavigateBar
        popular={populars}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <Title>Popüler Olanlar</Title>
      <Slider className="p-10" {...settings}>
        {populars.length &&
          filtered.map((populars, id) => (
            <div key={populars.id}>
              {populars.poster_path ? (
                <picture className="block px-2 hover:opacity-20 cursor-pointer">
                  <img
                    src={`${IMAGE_PATH}${populars.poster_path}`}
                    alt="Slider"
                    className="rounded-lg"
                  />
                </picture>
              ) : null}
              <h1 className="text-brand-dark-color text-center mt-2 font-semibold px-6">
                {populars.original_title}
              </h1>
            </div>
          ))}
      </Slider>
    </div>
  );
}

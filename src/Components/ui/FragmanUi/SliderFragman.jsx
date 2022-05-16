
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Title from "../Title";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import axios from "axios";

function NextBtn({ className, style, onClick }) {
  return (
    <button className={`text-brand-color absolute top-1/2 -right-12 -translate-y-1 hover:opacity-50`}  onClick={onClick}><IoIosArrowForward size={22}/></button>
  );
}

function PrevBtn({ className, style, onClick }) {
  return (
    <button className={`text-brand-color absolute top-1/2 -left-12 -translate-y-1 hover:opacity-50`} onClick={onClick}><IoIosArrowBack size={22}/></button>
  );
}

export default function SliderFragman() {

    // Fetch Data
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "17238172b25c3a589bc302e2e5949b51";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";
  
  const [fragman, setFragman] = useState([]);
  const fetchMoviesFragman = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/upcoming?&api_key=${API_KEY}`);
    setFragman(results);
  };

  useEffect(() => {
    fetchMoviesFragman();
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
    prevArrow: <PrevBtn />
  };
  return (
    <div className="container p-20">
      <Title>Gelecek Olanlar</Title>
      <Slider className="mt-10" {...settings}>
        {fragman.length &&
          fragman.map((fragman, index) => (
            <div key={fragman.id}>
              <picture className="block px-3 hover:opacity-20 cursor-pointer">
                <img src={`${IMAGE_PATH}${fragman.poster_path}`} alt="Slider" className="rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  return (
    <div className="relative h-auto before:bg-gradient-to-r before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[350px] object-cover"
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/bcT8CaBIj086WVD7K529h78eujb.jpg"
            alt="Slider"
          />
        </div>
        <div>
          <img
            className="w-full h-[350px] object-cover"
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ayUMWKe6Wow5ixLlKxxlp7IqTiI.jpg"
            alt="Slider"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20 p-24">
        <div className="hidden sm:block w-28">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#F2F4F8"
              d="M32.2,-50.7C38,-52.4,36.5,-36.3,42.2,-24.9C47.9,-13.5,60.9,-6.7,56.2,-2.7C51.6,1.4,29.3,2.7,17.2,3.1C5.1,3.4,3.1,2.7,2,18.7C0.8,34.7,0.4,67.3,-3.8,73.9C-7.9,80.4,-15.9,60.9,-20,46.6C-24.2,32.3,-24.5,23.3,-34.6,16.4C-44.8,9.5,-64.8,4.8,-74.7,-5.7C-84.6,-16.2,-84.4,-32.4,-70.5,-32.9C-56.7,-33.3,-29.1,-17.9,-15,-11.4C-1,-5,-0.5,-7.4,6.3,-18.4C13.2,-29.4,26.4,-48.9,32.2,-50.7Z"
              transform="translate(100 100)"
            />
          </svg>
          <h3 className="text-4xl mt-8 font-medium text-white">
            Film Tutkunları <br /> İçin...
          </h3>
        </div>
        <div className="w-[400px] rounded-xl bg-gray-50 p-6">
          <div className="grid gap-y-4">
            <div className="flex gap-x-2">
              <label className="flex-1 relative group block">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded-xl w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Arama Yap
                </span>
              </label>
            </div>
            <button className="bg-brand-dark-color text-brand-white-color transition-colors hover:bg-primary-brand-color hover:text-white h-12 flex items-center justify-center rounded-xl w-full text-sm font-semibold ">
              Ara
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

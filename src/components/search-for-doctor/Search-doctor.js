import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./search-doctor.scss";

import bonesIcon from "./../../assets/images/bones.png";
import teethIcon from "./../../assets/images/teeth.png";
import heartIcon from "./../../assets/images/heart.png";
import stomachIcon from "./../../assets/images/stomach.png";
import childrenIcon from "./../../assets/images/children.png";
import eyeIcon from "./../../assets/images/eye.png";
import brainIcon from "./../../assets/images/brain.png";

function SearchDoctor() {
  const splideOptions = {
    rewind: false,
    perPage: 4,
    gap: "1rem",
    mediaQuery: "max",
    breakpoints: {
      576: {
        perPage: 1,
      },
      767: {
        perPage: 2,
      },
      992: {
        perPage: 3,
      },
    },
    autoScroll: {
      speed: 1,
    },

  };

  return (
    <div className="search bg-slate-200 py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="search-title text-center">
          <p className="text-main-color font-semibold text-lg mb-2">
            أختر التخصص
          </p>
          <h2 className="text-black-color text-3xl font-bold mb-12">
            ابحث عن طبيبك
          </h2>
        </div>
        <Splide  options={splideOptions} aria-label="My Favorite Images">
          <SplideSlide>
            <div className="item bg-slate-300 bg-opacity-70 border rounded-lg p-4 cursor-pointer grid place-items-center">
              <div className="item-img mb-4">
                <img className="h-52 rounded-lg" src={bonesIcon} alt="عظام" />
              </div>
              <div className="item-title">
                <a className="text-xl text-black-color font-bold" href="#/">
                  عظام
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="item bg-slate-300 bg-opacity-70 border rounded-lg p-4 cursor-pointer grid place-items-center">
              <div className="item-img mb-4">
                <img className="h-52 rounded-lg" src={teethIcon} alt="أسنان" />
              </div>
              <div className="item-title">
                <a className="text-xl text-black-color font-bold" href="#/">
                  أسنان
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="item bg-slate-300 bg-opacity-70 border rounded-lg p-4 cursor-pointer grid place-items-center">
              <div className="item-img mb-4">
                <img className="h-52 rounded-lg" src={brainIcon} alt="مخ و أعصاب" />
              </div>
              <div className="item-title">
                <a className="text-xl text-black-color font-bold" href="#/">
                  مخ و أعصاب
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="item bg-slate-300 bg-opacity-70 border rounded-lg p-4 cursor-pointer grid place-items-center">
              <div className="item-img mb-4">
                <img className="h-52 rounded-lg" src={eyeIcon} alt="عيون" />
              </div>
              <div className="item-title">
                <a className="text-xl text-black-color font-bold" href="#/">
                  عيون
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="item bg-slate-300 bg-opacity-70 border rounded-lg p-4 cursor-pointer grid place-items-center">
              <div className="item-img mb-4">
                <img className="h-52 rounded-lg" src={heartIcon} alt="أمراض القلب" />
              </div>
              <div className="item-title">
                <a className="text-xl text-black-color font-bold" href="#/">
                  أمراض القلب
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="item bg-slate-300 bg-opacity-70 border rounded-lg p-4 cursor-pointer grid place-items-center">
              <div className="item-img mb-4">
                <img className="h-52 rounded-lg" src={childrenIcon} alt="أطفال" />
              </div>
              <div className="item-title">
                <a className="text-xl text-black-color font-bold" href="#/">
                  أطفال
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="item bg-slate-300 bg-opacity-70 border rounded-lg p-4 cursor-pointer grid place-items-center">
              <div className="item-img mb-4">
                <img className="h-52 rounded-lg" src={stomachIcon} alt="الباطنة" />
              </div>
              <div className="item-title">
                <a className="text-xl text-black-color font-bold" href="#/">
                  الباطنة
                </a>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default SearchDoctor;

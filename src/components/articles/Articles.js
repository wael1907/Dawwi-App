import { Splide, SplideSlide } from "@splidejs/react-splide";

import articlePhoto1 from "./../../assets/images/article-1.jpg";
import articlePhoto2 from "./../../assets/images/article-2.jpg";
import articlePhoto3 from "./../../assets/images/article-3.png";
import articlePhoto4 from "./../../assets/images/article-4.jpg";
import articlePhoto5 from "./../../assets/images/article-5.jpg";

function Articles() {
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
    <div className="articles py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="articles-title text-center">
          <h2 className="text-main-color text-4xl font-bold mb-4">
            مقالات طبية
          </h2>
          <p className="text-slate-500 font-semibold text-balance mb-12">
            استكشف و ابق علي اطلاع مع مجموعة من المقالات الطبية التي تغطي مجموعة
            واسعة من المواضيع الطبية, أحدث الأبحاث و النصائح العملية للحفاظ علي
            صحتك, لمساعدتك في اتخاذ قرارات بشأن صحتك و سلامتك النفسية و الجسدية.
          </p>
        </div>
        <Splide options={splideOptions} aria-label="My Favorite Images">
            
          <SplideSlide>
            <div className="bg-white min-h-[23rem] md:min-h-[26rem] flex flex-col rounded-lg overflow-hidden border text-right">
              <div className="item-img">
                <img className="h-52 rounded-t-lg w-full" src={articlePhoto1} alt="" />
              </div>
              <div className="item-info flex flex-col flex-grow px-2 py-4">
                <h3 className="text-black-color text-lg font-bold mb-3">
                  فك رموز صور الرنين المغناطيسي للدماغ
                </h3>
                <span className="text-slate-500 text-sm flex-grow block font-semibold mb-3 text-ellipsis overflow-hidden ">
                    قامت منظمة الصحة العالمية بعمل أبحاث و استكشافات لصور الرنين المغناطيسي الخاصة بهياكل الدماغ, وقامت بال
                </span>
                <a
                  className="text-lg text-main-color font-semibold underline"
                  href="#/"
                >
                  اقرأ المزيد
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="bg-white min-h-[23rem] md:min-h-[26rem] flex flex-col rounded-lg overflow-hidden border text-right">
              <div className="item-img">
                <img className="h-52 rounded-t-lg w-full" src={articlePhoto2} alt="" />
              </div>
              <div className="item-info flex flex-col flex-grow px-2 py-4">
                <h3 className="text-black-color text-lg font-bold mb-3">
                  الأبحاث الأخيرة لمنظمة الصحة العالمية
                </h3>
                <span className="text-slate-500 text-sm flex-grow block font-semibold mb-3">
                    قامت منظمة الصحة العالمية بعمل أبحاث و استكشافات لصور الرنين المغناطيسي الخاصة بهياكل الدماغ, وقامت بال
                </span>
                <a
                  className="text-lg text-main-color font-semibold underline"
                  href="#/"
                >
                  اقرأ المزيد
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="bg-white min-h-[23rem] md:min-h-[26rem] flex flex-col rounded-lg overflow-hidden border text-right">
              <div className="item-img">
                <img className="h-52 rounded-t-lg w-full" src={articlePhoto3} alt="" />
              </div>
              <div className="item-info flex flex-col flex-grow px-2 py-4">
                <h3 className="text-black-color text-lg font-bold mb-3">
                اخر المستجدات حول فيروس كورونا الجديد
                </h3>
                <span className="text-slate-500 text-sm flex-grow block font-semibold mb-3">
                    قامت منظمة الصحة العالمية بعمل أبحاث و استكشافات لصور الرنين المغناطيسي الخاصة بهياكل الدماغ, وقامت بال
                </span>
                <a
                  className="text-lg text-main-color font-semibold underline"
                  href="#/"
                >
                  اقرأ المزيد
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="bg-white min-h-[23rem] md:min-h-[26rem] flex flex-col rounded-lg overflow-hidden border text-right">
              <div className="item-img">
                <img className="h-52 rounded-t-lg w-full" src={articlePhoto4} alt="" />
              </div>
              <div className="item-inf flex flex-col flex-grow px-2 py-4">
                <h3 className="text-black-color text-lg font-bold mb-3">
                  تعرف علي أخر المواد المستخدمة في صناعة تقويم الأسنان
                </h3>
                <span className="text-slate-500 text-sm flex-grow block font-semibold mb-3">
                    قامت منظمة الصحة العالمية بعمل أبحاث و استكشافات لصور الرنين المغناطيسي الخاصة بهياكل الدماغ, وقامت بال
                </span>
                <a
                  className="text-lg text-main-color font-semibold underline"
                  href="#/"
                >
                  اقرأ المزيد
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="bg-white min-h-[23rem] md:min-h-[26rem] flex flex-col rounded-lg overflow-hidden border text-right">
              <div className="item-img">
                <img className="h-52 rounded-t-lg w-full" src={articlePhoto5} alt="" />
              </div>
              <div className="item-info flex flex-col flex-grow px-2 py-4">
                <h3 className="text-black-color text-lg font-bold mb-3">
                  أهمية استخدام المواد النانوية في معالجة الأمراض
                </h3>
                <span className="text-slate-500 text-sm flex-grow block font-semibold mb-3">
                    قامت منظمة الصحة العالمية بعمل أبحاث و استكشافات لصور الرنين المغناطيسي الخاصة بهياكل الدماغ, وقامت بال
                </span>
                <a
                  className="text-lg text-main-color font-semibold underline"
                  href="#/"
                >
                  اقرأ المزيد
                </a>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Articles;

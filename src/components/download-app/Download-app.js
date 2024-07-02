import appPhoto from "./../../assets/images/app-background.png";
import googlePlayIcon from "./../../assets/images/google-play.png";
import appStoreIcon from "./../../assets/images/app-store.png";


import "./download-app.scss";

function DownloadApp() {
  return (
    <div className="flex items-center justify-center p-2 pb-6 md:p-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="download overflow-hidden flex items-center flex-col md:flex-row">
          <div className="download-text w-full md:w-1/2 px-8 pt-6">
            <h2 className="h2 text-2xl md:text-5xl md:leading-snug text-black font-bold mb-6 md:mb-4">
              حمل تطبيق داوِ
            </h2>
            <p className="text-slate-600 font-semibold text-balance md:text-lg mb-6 md:b-4">
              اعرف التخصص الطبي الذي يجب ان نبحث عنه و يكون التخصص المناسب
              لحالتك و الاعراض الخاصة بك. ابحث عن طبيب و حدد اليوم و الوقت , ثم
              احجز كشفك الطبي . قم بمسح الروشتة بهاتفك وتعرف علي علاجك.
            </p>
            <div className="flex items-center flex-wrap gap-4">
              <img className="w-40 cursor-pointer" src={googlePlayIcon} alt="app" />
              <img className="w-40 cursor-pointer" src={appStoreIcon} alt="app" />
            </div>
          </div>
          <div className="download-img w-full md:w-1/2">
            <img className="mx-auto" src={appPhoto} alt="app" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;

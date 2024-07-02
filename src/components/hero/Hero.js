import "./hero.scss";
import doctor from './../../assets/images/men-doctors.webp'
function Hero() {
  return (
    <main>
      <div className="hero flex items-center justify-between flex-wrap ps-12 pl-6 max-w-screen-xl mx-auto">
        <div className="hero-text pt-12 lg:pt-0">
          <h1 className="h1 text-3xl md:text-5xl md:leading-snug text-white font-bold mb-2 md:mb-4">احجز <span className="text-black-color">كشفك الطبي</span> في جزء من الثانية.</h1>
          <p className="text-slate-200 font-semibold text-lg mb-4">
            اختر من بين الاف الاطباء و حدد موعد زيارتك بناءََ علي موقعك و أوقاتك
            المتاحة
          </p>
          <button
            type="button"
            className="font-bold text-xl bg-white text-main-color rounded-lg w-36 h-11 hover:bg-main-color hover:text-white transition"
          >
            بحث عن طبيب
          </button>
        </div>
        <div className="hero-img">
            <img src={doctor} alt="doctor" />
        </div>
      </div>
    </main>
  );
}

export default Hero;

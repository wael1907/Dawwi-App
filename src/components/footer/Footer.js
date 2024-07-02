import logoWhite from "./../../assets/images/logo-white.png";

import facebookIcon from "./../../assets/images/facebook.png";
import whatsappIcon from "./../../assets/images/whatsapp.png";
import instagramIcon from "./../../assets/images/instagram.png";
import linkedinIcon from "./../../assets/images/linkedin.png";

import "./footer.scss";

function Footer() {
  return (
    <footer className="footer px-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center md:justify-between flex-wrap items-center border-b pt-16 pb-8 border-slate-300">
          <div className="logo-and-info mb-6 md:mb-0 flex justify-center items-center flex-col lg:items-start">
            <div className="logo mb-3">
              <img src={logoWhite} className="h-20" alt="Dawwi Logo" />
            </div>
            <p className="text-white mb-3">طبيبك و صيدليتك في مكان واحد.</p>
            <div className="social-icons flex items-center gap-3">
              <a href="#/">
                <img src={facebookIcon} className="w-8" alt="فيس بوك" />
              </a>
              <a href="#/">
                <img src={whatsappIcon} className="w-8" alt="واتساب" />
              </a>
              <a href="#/">
                <img src={instagramIcon} className="w-8" alt="انستجرام" />
              </a>
              <a href="#/">
                <img src={linkedinIcon} className="w-8" alt="لينكد ان" />
              </a>
            </div>
          </div>
          <div className="services-links flex flex-wrap gap-4 lg:gap-28">
            <div className="services--links-list w-full lg:w-auto text-center md:text-right">
              <h4 className="text-white font-bold text-xl mb-6">خدمات</h4>
              <ul>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    تشخيص
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    مقالات طبية
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    احجز كشف طبي
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    تسوق صيدلية
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    طلب بالروشتة
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    طلب بصورة المنتج
                  </a>
                </li>
              </ul>
            </div>
            <div className="services--links-list w-full lg:w-auto text-center md:text-right">
              <h4 className="text-white font-bold text-xl mb-6">صيدلية</h4>
              <ul>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    أدوية
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    مستلزمات طبية
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    مكملات غذائية
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    عناية شخصية
                  </a>
                </li>
              </ul>
            </div>
            <div className="services--links-list w-full lg:w-auto text-center md:text-right">
              <h4 className="text-white font-bold text-xl mb-6">مساعدة</h4>
              <ul>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    من نحن
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    تواصل معنا
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    دعم فني
                  </a>
                </li>
                <li>
                  <a
                    className="mb-4 text-slate-200 block hover:underline"
                    href="#/"
                  >
                    أسئلة شائعة
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="under-footer flex items-center justify-center gap-2 md:justify-between flex-wrap py-6">
          <p className="text-white font-semibold text-sm">
            جميع الحقوق محفوظة 2024.
          </p>
          <div className="links flex gap-4">
            <a className="text-sm text-white block hover:underline" href="#/">
              الشروط و الأحكام
            </a>
            <a className="text-sm text-white block hover:underline" href="#/">
              اتفاقية الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

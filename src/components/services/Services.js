import diagnosisIcon from "./../../assets/images/diagnosis.png";
import setoIcon from "./../../assets/images/seto.png";
import chatIcon from "./../../assets/images/chat.png";
import pharmacyIcon from "./../../assets/images/pharmacy.png";

function Services() {
  return (
    <>
      <div className="services max-w-screen-xl mx-auto py-16">
        <div className="services-title text-center">
          <p className="text-main-color font-semibold text-lg mb-2">
            ما الذي نقدمه
          </p>
          <h2 className="text-black-color text-3xl font-bold mb-12">
            خدماتنا الطبية
          </h2>
        </div>
        <div className="services-items">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
            <div className="item flex justify-center items-center flex-col">
              <div className="item-icon mb-4 flex justify-center items-center border-4 rounded-full border-main-color w-24 h-24">
                <img
                  className="w-16"
                  src={diagnosisIcon}
                  alt="Diagnosis Icon"
                />
              </div>
              <div className="item-info text-center px-4">
                <h3 className="text-black-color text-xl font-bold mb-2">
                  تشخيص
                </h3>
                <span className="text-slate-500 font-semibold text-sm">
                  تعرف علي التخصص الطبي المناسب لحالتك, الذي يجب أن تبحث عنه قبل
                  البحث عن الطبيب.
                </span>
              </div>
            </div>

            <div className="item flex justify-center items-center flex-col">
              <div className="item-icon mb-4 flex justify-center items-center border-4 rounded-full border-main-color w-24 h-24">
                <img
                  className="w-16"
                  src={setoIcon}
                  alt="Seto Icon"
                />
              </div>
              <div className="item-info text-center px-4">
                <h3 className="text-black-color text-xl font-bold mb-2">
                  كشوفات طيبة
                </h3>
                <span className="text-slate-500 font-semibold text-sm">
                    ابحث عن طبيب, و حدد اليوم و الوقت, ثماحجز كشفك مع الطبيب الذي قمت باختياره.
                </span>
              </div>
            </div>

            <div className="item flex justify-center items-center flex-col">
              <div className="item-icon mb-4 flex justify-center items-center border-4 rounded-full border-main-color w-24 h-24">
                <img
                  className="w-16"
                  src={pharmacyIcon}
                  alt="Pharmacy Icon"
                />
              </div>
              <div className="item-info text-center px-4">
                <h3 className="text-black-color text-xl font-bold mb-2">
                  صيدلية
                </h3>
                <span className="text-slate-500 font-semibold text-sm">
                    امسح الروشتة بهاتفك, و اشترِ أدويتك بسهولة, و سيتم توصيلها إلي باب منزك.
                </span>
              </div>
            </div>

            <div className="item flex justify-center items-center flex-col">
              <div className="item-icon mb-4 flex justify-center items-center border-4 rounded-full border-main-color w-24 h-24">
                <img
                  className="w-16"
                  src={chatIcon}
                  alt="Chat Icon"
                />
              </div>
              <div className="item-info text-center px-4">
                <h3 className="text-black-color text-xl font-bold mb-2">
                  محادثات فورية
                </h3>
                <span className="text-slate-500 font-semibold text-sm">
                    هل لديك سؤال طبي؟ يمكنك استخدام خدمة المحادثات الفورية و احصل علي إجابة سؤالك.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

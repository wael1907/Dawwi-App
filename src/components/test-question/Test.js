import "./test.scss";
import questionIcon from "./../../assets/images/question.png";

function TestQuestion() {
  return (
    <div className="test-question">
      <div className="test text-center flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto">
          <div className="test-info px-4 text-center flex justify-center items-center flex-col">
            <h2 className="h2 w-2/3 text-2xl md:text-5xl md:leading-snug text-white font-bold mb-4">
              قم بتشخيص نفسك في الحال, و تعرف علي التخصص قبل الحجز
            </h2>
            <p className="text-slate-200 w-full md:w-2/3 text-balance font-semibold text-lg mb-6">
              شخص حالتك بنفسك قم بإجراء اختبار قصير للمساعدة في تحديد التخصص
              المناسب لأعراضك و احتياجاتك, أجب علي بعض الأسئلة البسيطة, و سنرشدك
              إلي الاختصاص الطبي المناسب لحالتك.
            </p>
            <button
              type="button"
              className="font-bold bg-white text-main-color rounded-lg w-44 h-11 hover:bg-main-color hover:text-white transition"
            >
              الذهاب إلي الاختبار
            </button>
          </div>
        </div>
      </div>
      <div className="question flex items-center justify-center p-12">
        <div className="question-info flex items-center flex-wrap justify-center gap-8 shadow-[0_2px_32px_-1px_rgba(7,138,150,0.3)] p-8 rounded-lg">
          <img className="w-20 opacity-50" src={questionIcon} alt="Question Icon" />
          <div className="text text-center md:text-right">
            <h4 className="h4 text-2xl font-bold mb-2 text-main-color">
              لديك سؤال
            </h4>
            <span className="text-slate-500 font-semibold block max-w-96">
              استخدم خدمة المحادثة الفورية و احصل علي الإجابة في غضون بضع دقائق
            </span>
          </div>
          <button
            type="button"
            className="font-semibold bg-main-color text-white rounded-lg w-32 h-10 border-main-color border-2 hover:text-main-color hover:bg-white transition"
          >
            اسأل طبيب
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestQuestion;

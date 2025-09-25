export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#f4fafc]" dir="rtl">
      <div className="relative max-w-3xl px-2 mx-auto sm:py-8 sm:px-4 md:px-6 lg:px-8">
        <div className="relative">
          <div className="mx-auto mb-6 text-base sm:text-lg max-w-prose">
            <h1>
              <span className="block mt-2 text-2xl sm:text-[2rem] font-extrabold leading-8 tracking-tight text-center text-[#2368a1] font-dubai-bold">
                طريقة التثبيت
              </span>
            </h1>
            <p className="mt-2 text-lg sm:text-xl leading-7 sm:leading-8 text-center text-gray-600 font-dubai-regular">
              كيف تقوم بتثبيت محرّر دَوّن على جهازك أو هاتفك
            </p>
          </div>

          <hr className="border-gray-200 my-6 sm:my-8" />

          <div className="px-2 py-4 sm:px-4 sm:py-6 font-dubai-regular text-[#4a4a4a] text-[18px] sm:text-lg leading-relaxed [&_p]:mb-4 sm:[&_p]:mb-6 [&_ul]:mb-4 sm:[&_ul]:mb-6 [&_li]:mb-2 sm:[&_li]:mb-3 [&_a]:text-[#3182ce] [&_a]:break-words hover:[&_a]:underline">
            <p>
              مرحباً، يمكنك تثبيت محرّر دَوِّن على أي جهاز بمختلف الأنظمة
              (ويندوز، ماك، لينوكس) وكذلك هاتفك المحمول أو الأجهزة اللوحية
              (الآيفون، الأندرويد) خلال ثوانٍ.
            </p>
            <p> كما يمكن لمحرّر دَوِّن أن يعمل دون الحاجة لاتصال إنترنت.</p>
            <h3 className="text-black mt-8 sm:mt-10 mb-3 sm:mb-4 font-dubai-bold text-lg sm:text-xl md:text-2xl">
              التنصيب على الكمبيوتر
            </h3>

            <p>
              أدخل محرّر دَوِّن من متصفّحك، وفي خانة الكتابة "الشريط العلوي"
              سترى رمز التنصيب (إن لم يظهر في البداية، اصبر قليلاً).
            </p>

            <div className="flex justify-center my-6">
              <img src="/images/install.png" alt="" className="rounded-lg" />
            </div>
            <p>
              اضغط على "تثبيت" (install) وسينشئ المتصفّح تلقائياً اختصاراً
              للتطبيق على جهازك في كل من خانة البرامج والتطبيقات. في حال جهازك
              يعمل بنظام "ماك" ستجده جاهزاً في جزء (Lunchpad).
            </p>
            <div className="flex justify-center my-6">
              <img src="/images/search.png" alt="" className="rounded-lg" />
            </div>
            <p>
              إن كنت تستخدم نظاماً مختلفاً أو لم يظهر لك، يمكنك تشغليه من دخولك
              للرابط التالي (على متصفّح الكروم):{" "}
              <a href="chrome://apps">chrome://apps</a>
            </p>
            <div className="flex justify-center my-6">
              <img src="/images/app.png" alt="" className="rounded-lg" />
            </div>

            <h3 className="text-black mt-8 sm:mt-10 mb-3 sm:mb-4 font-dubai-bold text-lg sm:text-xl md:text-2xl">
              التنصيب على الهاتف
            </h3>
            <p>
              ادخل لمحرّر دَوِّن من متصفّح هاتفك، قم بعمل اختصار لشاشة الهاتف
              الرئيسية.
            </p>
            <div className="flex justify-center my-6">
              <img src="/images/addPhone.png" alt="" className="rounded-lg" />
            </div>
            <p>
              توجّه الآن لشاشة الهاتف الرئيسية، وستجد التطبيق قد تم تنصيبه
              بالفعل، يمكنك الآن استخدامه دون الحاجة إلى اتصال إنترنت.
            </p>
            <div className="flex justify-center my-6">
              <img src="/images/phone.png" alt="" className="rounded-lg" />
            </div>
            <p>
              إذا كنت تواجه أي مشكلة،{" "}
              <a href="http://dawin.io/contact">
                تواصل معي وسأكون موجوداً لمساعدتك
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

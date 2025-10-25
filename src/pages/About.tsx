import { SparklesText } from "@/components/ui/sparkles-text"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#f4fafc]" dir="rtl">
      <div className="relative max-w-3xl px-2 mx-auto sm:py-8 sm:px-4 md:px-6 lg:px-8">
        <div className="relative">
          <div className="mx-auto mb-6 text-base sm:text-lg max-w-prose">
            <h1>
              <span className="block mt-2 text-2xl sm:text-[2rem] font-extrabold leading-8 tracking-tight text-center text-[#2368a1] font-dubai-bold">
                حول المحرّر
              </span>
            </h1>
            <p className="mt-2 text-lg sm:text-xl leading-7 sm:leading-8 text-center text-gray-600 font-dubai-regular">
              كيف بنيت المحرر وما دوره وماذا سيقدّم لك
            </p>
          </div>

          <hr className="border-gray-200 mt-6 sm:mt-8" />

          <div className="px-2 py-4 sm:px-4 sm:py-6 font-dubai-regular text-[#4a4a4a] text-[18px] sm:text-lg leading-relaxed [&_p]:mb-4 sm:[&_p]:mb-6 [&_ul]:mb-4 sm:[&_ul]:mb-6 [&_li]:mb-2 sm:[&_li]:mb-3 [&_a]:text-[#3182ce] [&_a]:break-words hover:[&_a]:underline">

              <div className="flex justify-center w-full mb-6 sm:mb-8 px-2 sm:px-4 text-center">
                <SparklesText colors={{ first: "#2368a1", second: "#fae29f" }}>
                  <p className="text-[20px] sm:text-lg md:text-xl font-dubai-regular text-[#2368a1] text-center leading-relaxed">
                    الآن محرّر دوّن بحلّة جديدة , وتجربة لم تعهدها من قبل , ميزات
                    عديدة بانتظارك!{" "}
                  </p>
                </SparklesText>
              </div>
            
            <p className="mt-4">
              دَوِّن، هو محرّر نصوص عربي لتنسيقات ماركداون (Markdown) صمّم لحلّ
              مشكلة عدم توفر أي محرر نصوص متقدم يدعم اللغة العربية والاتجاه
              (Right to left). طوّر بأياد عربية خالصة تكّن للغة العربية احتراما
              وإجلالًا.
            </p>
            <p>
              محرر دَوِّن لم يبنى بطريقة عادية، بل بفلسفة مختلفة، صنعته من خلال
              تحدٍ وضعته لنفسي وأطلقته قبل مدة بعنوان (من فكرة إلى منتج) وشاركت
              رحلة تفاصيل بنائه علناً خطوة بخطوة (Building in public) عبر مدونتي
              في أربعة أيام مختلفة:
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-2 sm:space-y-3 pl-4">
              <li>
                <a href="https://blog.abdelhadi.org/building-in-public-arabic-Markdown-editor/#start">
                  الانطلاقة واعلان التحدّي.
                </a>
              </li>
              <li>
                <strong className="text-black">اليوم الأوّل: </strong>
                <a href="https://blog.abdelhadi.org/building-in-public-arabic-Markdown-editor/#day-1">
                  دراسة الفكرة وحلّ المشكلة واختيار اسم المشروع.
                </a>
              </li>
              <li>
                <strong className="text-black">اليوم الثاني: </strong>
                <a href="https://blog.abdelhadi.org/building-in-public-arabic-Markdown-editor/#day-2">
                  تصميم المشروع ودراسة تجربة المستخدم (UX/UI).
                </a>
              </li>
              <li>
                <strong className="text-black">اليوم الثالث: </strong>
                <a href="https://blog.abdelhadi.org/building-in-public-arabic-Markdown-editor/#day-3">
                  اكمال تصميم المشروع وبدء البرمجة (fron-end)
                </a>
              </li>
              <li>
                <strong className="text-black">اليوم الرابع: </strong>
                <a href="https://blog.abdelhadi.org/building-in-public-arabic-Markdown-editor/#day-4">
                  إطلاق النسخة التجريبية
                </a>
              </li>
            </ul>
            <p>
              حاولت تطوير أدواته وتطوير خصائص يحتاجها الكاتب والمدوّن. كما جعلته
              موفراً بتقنية PWA أو (Progressive Web Apps) والتي تمكنك من
              استعماله وتنصيبه على أي جهاز واستعماله دون الحاجة إلى اتصال
              انترنت.
            </p>
            <p>
              مبادرة التحدّي جاءت لهدف أسمى وبِنيّة تشجيع الشباب والفتيات على
              تطوير أدوات تخدم المحتوى العربي دون أن نعتمد على منتجات ثانية لا
              تدعم العربية ونحتاج إلى ترقيعها. لك أن تدرك أن الفارق بين ظهور
              ماركداون إلى حد يومنا هذا 16 سنة كاملة! لا توجد أي أداة تدعم
              العربية وهذا بكل صدق .. مُؤلم.
            </p>
            <p>
              هذه لمحة تعريفية حول فكرة المحرّر، سأكتب تدوينة قادمة على موقعي
              أحكي وأجيب فيها عن تساؤلات مثل متى أفتح المصدر البرمجي (Open
              Source) وماذا تعلّمت من مشاركة البناء علناً (Building in public)
              وكيف سيتطور المشروع ليدعم ثلاث لغات مختلفة ويدخل الويب بإسمه
              الصغير Dawin Editor. أشكر جزيل الشكر كل المساهمين مادياً على صفحتي{" "}
              <a href="https://www.buymeacoffee.com/abdelhadi">
                Buy Me a Coffee
              </a>{" "}
              ومعنويا .. سندوّن أسماءهم لاحقاً إن شاء الله. المشروع سيتطوّر بإذن
              الله أكثر وأكثر ونضيف العديد من الخصائص لتسهيل استعماله.
            </p>
            <h3 className="text-black mt-8 sm:mt-10 mb-3 sm:mb-4 font-dubai-bold text-lg sm:text-xl md:text-2xl">
              كن أحد الرعاة الرسميين
            </h3>
            <p>
              يمكنك أن تصبح أحد رعاة مشروع محرّر دَوِّن وينقش اسمك على صفحاته
              كتسويق لك أو لمشروعك إن شاء الله تعالى. يمكنك أن تراسلني{" "}
              <a href="/team">من هنا</a>
            </p>
            <h3 className="text-black mt-8 sm:mt-10 mb-3 sm:mb-4 font-dubai-bold text-lg sm:text-xl md:text-2xl">
              النسخة القديمة
            </h3>
            <p>
              يمكنك استعمال النسخة السابقة من محرر دوّن من{" "}
              <a href="https://old.dawin.io/">النسخة القديمة</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

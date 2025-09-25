export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#f4fafc]" dir="rtl">
      <div className="relative max-w-3xl px-2 mx-auto sm:py-8 sm:px-4 md:px-6 lg:px-8">
        <div className="relative">
          <div className="mx-auto mb-6 text-base sm:text-lg max-w-prose">
            <h1>
              <span className="block mt-2 text-2xl sm:text-[2rem] font-extrabold leading-8 tracking-tight text-center text-[#2368a1] font-dubai-bold">
                تواصل معي
              </span>
            </h1>
            <p className="mt-2 text-lg sm:text-xl leading-7 sm:leading-8 text-center text-gray-600 font-dubai-regular">
              أرحب بتواصلك معي وبرسالتك في أي وقت ومن أي مكان
            </p>
          </div>

          <hr className="border-gray-200 my-6 sm:my-8" />

          <div className="px-2 py-4 sm:px-4 sm:py-6 font-dubai-regular text-[#4a4a4a] text-[18px] sm:text-lg leading-relaxed [&_p]:mb-4 sm:[&_p]:mb-6 [&_ul]:mb-4 sm:[&_ul]:mb-6 [&_li]:mb-2 sm:[&_li]:mb-3 [&_a]:text-[#3182ce] [&_a]:break-words hover:[&_a]:underline">
            <div className="flex justify-center mb-6">
              <img src="https://i.suar.me/LXlnG/" alt="صورة" />
            </div>
            <p>
              حياك الله، سعيد بوجودك، سأعرّفك بنفسي أنا عبدالهادي جعفر، شاب
              مُسلم من الجزائر، خرّيج علوم حاسب (IT). أحب البساطة في كل شيء وحل
              المشاكل بطرق ابداعية.
            </p>
            <p>
              أصمم وأبرمج مشاريع رقمية وأحرص على إخراجها بجمالية حتى في أدقّ
              الأشياء بحيث ترتكز على البساطة والخلوّ من التعقيد.
            </p>
            <p>
              أكتب حول التقنية وتطوير المشاريع الرقمية وإدارتها عبر تدوينات
              ستعجبك حتما:{" "}
              <a href="https://blog.abdelhadi.org/">مدونة عبدالهادي الأندلسي</a>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li className="relative pr-5 before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-gray-200 before:rounded-full">
                  البريد الالكتروني:{" "}
                  <a href="mailto:me@abdelhadi.org">me@abdelhadi.org</a>
              </li>
              <li className="relative pr-5 before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-gray-200 before:rounded-full">
                  <a href="https://www.linkedin.com/in/djafer">لينكدإن</a>.
              </li>
              <li className="relative pr-5 before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-gray-200 before:rounded-full">
                  <a href="https://twitter.com/elh4di">تويتر</a>.
              </li>
              <li className="relative pr-5 before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-gray-200 before:rounded-full">
                  <a href="https://t.me/aelh4di">تليجرام</a>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

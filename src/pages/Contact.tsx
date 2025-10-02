export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#f4fafc]" dir="rtl">
      <div className="relative max-w-5xl px-4 mx-auto sm:py-12 md:px-6 lg:px-8">
        <div className="mx-auto mb-6 text-base sm:text-lg max-w-prose">
          <h1>
            <span className="block mt-2 text-2xl sm:text-[2rem] font-extrabold leading-8 tracking-tight text-center text-[#2368a1] font-dubai-bold">
              فريق العمل
            </span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl leading-7 sm:leading-8 text-center text-gray-600 font-dubai-regular">
            حيّاك الله، يسعدنا وجودك معنا. هل لديك فكرة لميزة جديدة أو واجهت
            عطلًا؟ تواصل مع فريق <span className="font-dubai-bold text-[#2368a1]">دَوّن</span>
          </p>
        </div>

        <hr className="border-gray-200 my-6 sm:my-8" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Member 1 */}
          <article className="rounded-xl p-6 bg-white/0 font-dubai-regular text-[#4a4a4a] text-[18px] sm:text-lg leading-relaxed">
            <div className="flex flex-col items-center text-center gap-4 [&>p]:text-right">
              <img
                src="https://avatars.hsoubcdn.com/b991b58ffab7853d5b9058e3a244a1f1?s=256"
                alt="عبدالهادي"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover"
              />

              <p>
                أنا عبدالهادي جعفر، شاب مُسلم من الجزائر، خرّيج علوم حاسب (IT).
                أحب البساطة في كل شيء وحل المشاكل بطرق ابداعية.
              </p>

              <p>
                أصمم وأبرمج مشاريع رقمية وأحرص على إخراجها بجمالية حتى في أدقّ
                الأشياء بحيث ترتكز على البساطة والخلوّ من التعقيد.
              </p>
              <p>
                أكتب حول التقنية وتطوير المشاريع الرقمية وإدارتها عبر تدوينات
                ستعجبك حتما:{" "}
                <span className="underline text-[#2368a1]">
                  <a href="https://blog.abdelhadi.org/">
                    مدونة عبدالهادي الأندلسي
                  </a>
                </span>
              </p>

              <div className="mt-2 flex gap-4">
                <a
                  href="mailto:me@abdelhadi.org"
                  aria-label="إرسال بريد الكتروني"
                  className="text-[#3182ce] hover:underline"
                >
                  me@abdelhadi.org
                </a>
                <a
                  href="https://www.linkedin.com/in/djafer"
                  aria-label="لينكدإن"
                  className="text-[#3182ce] hover:underline"
                >
                  لينكدإن
                </a>
                <a
                  href="https://twitter.com/elh4di"
                  aria-label="تويتر"
                  className="text-[#3182ce] hover:underline"
                >
                  تويتر
                </a>
              </div>
            </div>
          </article>

          {/* Member 2 */}
          <article className="rounded-xl p-6 bg-white/0 font-dubai-regular text-[#4a4a4a] text-[18px] sm:text-lg leading-relaxed">
            <div className="flex flex-col items-center text-center gap-4 [&>p]:text-right">
              <img
                src="https://avatars.githubusercontent.com/u/148115686?v=4"
                alt="عضو الفريق"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover"
              />

              <p>أنا يوسف بن عتصمان مطور برمجيات و أسعى لترك أثر ينفع الأمة</p>
              <p>
                قصتي بدأت مع{" "}
                <a
                  className=" text-[#2368a1]"
                  href="https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%A2%D8%AC%D8%B1%D9%88%D9%85%D9%8A%D8%A9"
                >
                  الاجرومية
                </a>{" "}
                في النحو هي صعبة , كذلك؟ ومن هناك كانت الانطلاقة في خدمة اللغة و
                ما جاورها من علوم وسائل كانت او مقاصد عبر البرمجيات
              </p>

              <div className="mt-2 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/youssouf-b-312097256/"
                  aria-label="لينكدإن"
                  className="text-[#3182ce] hover:underline"
                >
                  لينكدإن
                </a>
                <a
                  href="https://www.facebook.com/benotsman.youssuf/"
                  aria-label="فيسبوك"
                  className="text-[#3182ce] hover:underline"
                >
                  فيسبوك
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

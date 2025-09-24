const Features = () => {
    return (
      <div className="py-10 overflow-hidden lg:py-18 font-dubai-regular" dir="rtl">
        <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2
              className="text-4xl  leading-8 tracking-tight text-center text-gray-900 sm:text-[36px] font-dubai-bold"
              id="feature"
            >
              تجربة كتابة لا مثيل لها
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
              مُحرّر دَوِّن صُمّم بأيادٍ عربية ليكون مخصصًا للكتاب والمدونين، يساعدهم
              على الإلهام ويمَكّنهم من تحرير مقالات باللغة العربية ذات جودة عالية.
            </p>
          </div>
  
          {/* Feature 1 */}
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold tracking-tight text-[#1a4d77] sm:text-3xl">
                محرّر ماركداون مُيسّر
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                يتميّز دَوِّن بخاصية المعاينة المباشرة لنُسُقِ نصوصك وتحريرها بسلاسة
                مع الحفظ التلقائي
              </p>
            </div>
            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <img
                className="relative mx-auto border shadow-md sm:rounded-lg"
                width="430"
                src="/images/first.png"
                alt="محرّر ماركداون - معاينة"
              />
            </div>
          </div>
  
          {/* Feature 2 */}
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#1a4d77] sm:text-3xl">
                  أدوات متكاملة
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  يوفر محرّر دَوِّن أزرارًا وشريط أدوات سهلة الاستخدام، أو
                  بالاختصارات من لوحة مفاتيحك
                </p>
              </div>
              <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                <img
                  className="relative mx-auto border shadow-md sm:rounded-lg"
                  width="430"
                  src="/images/second.png"
                  alt="أدوات المحرّر"
                />
              </div>
            </div>
          </div>
  
          {/* Feature 3 */}
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold tracking-tight text-[#1a4d77] sm:text-3xl">
                تجاوب متكامل
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                سواء كنت تكتب أو تراجع، دَوِّن يمكّنك من تخصيصه بمرونة لتحصل على
                واجهة مريحة مثلما تريد.
              </p>
            </div>
            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <img
                className="relative mx-auto border shadow-md sm:rounded-lg"
                width="430"
                src="/images/third.png"
                alt="تجاوب واجهة المستخدم"
              />
            </div>
          </div>
  
          {/* Feature 4 */}
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#1a4d77] sm:text-3xl">
                  التصدير بصِيَغ مختلفة
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  استخرج نصوصك جاهزة بصيغ مختلفة HTML و Markdown لتستعملها أينما شئت
                </p>
              </div>
              <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                <img
                  className="relative mx-auto border shadow-md sm:rounded-lg"
                  width="430"
                  src="/images/fourth.png"
                  alt="تصدير الصيغ"
                />
              </div>
            </div>
          </div>
  
          {/* Feature 5 */}
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold tracking-tight text-[#1a4d77] sm:text-3xl">
                يعمل بدون إنترنت
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                ثبّته على جهازك أو هاتفك وحرّر وقتما تريد، في أيّ مكان دون الحاجة
                لاتصال بالإنترنت
              </p>
            </div>
            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <img
                className="relative mx-auto border shadow-md sm:rounded-lg"
                width="430"
                src="/images/fifth.png"
                alt="يعمل بدون إنترنت"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  
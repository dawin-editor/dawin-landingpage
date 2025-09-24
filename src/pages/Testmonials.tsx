const Testmonials = () => {
  return (
    <section
      className="py-12 overflow-hidden bg-cerulean-20 md:py-20 lg:py-24 bg-[#f4fafc] font-dubai-regular"
      dir="rtl"
    >
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative">
          {/* Top logo */}
          <img
            className="h-8 mx-auto"
            src="/images/zid-testmonial.svg"
            alt="شعار التستيمونيال"
          />

          {/* Quote */}
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-xl font-medium leading-9 text-center text-gray-900 sm:text-xl lg:text-2xl">
              <p>
                ”أنا سعيد برؤية مشروع دَوِّن لأني كاتب ومؤسس ومدير لعدد من
                المشاريع المتعلقة بالكتابة مثل زد وتزويد، فأنا أعرف حجم الحلول
                التي يقدمها دَوِّن لمجتمع الكتابة. وبوجود دَوِّن إلى جانب
                الأدوات والمنصات العربية الأخرى يمكننا أن نتفاءل باستخدام إنترنت
                عربي متكامل في المستقبل القريب.“
              </p>
            </div>

            {/* Author */}
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="w-10 h-10 mx-auto rounded-full"
                    src="/images/zid.png"
                    alt="صورة الكاتب"
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:mr-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    عبدالمحسن العنيق
                  </div>
                  <svg
                    className="hidden w-5 h-5 mx-1 text-cerulean-500 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z"></path>
                  </svg>
                  <div className="text-base font-medium text-gray-500">
                    مؤسس موقع زد
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testmonials;

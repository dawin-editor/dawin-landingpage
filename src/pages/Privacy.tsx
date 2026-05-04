export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#f4fafc]" dir="rtl">
      <div className="relative max-w-3xl px-2 mx-auto sm:py-8 sm:px-4 md:px-6 lg:px-8">
        <div className="relative">
          <div className="mx-auto mb-6 text-base sm:text-lg max-w-prose">
            <h1>
              <span className="block mt-2 text-2xl sm:text-[2rem] font-extrabold leading-8 tracking-tight text-center text-[#2368a1] font-dubai-bold">
                سياسة الخصوصية
              </span>
            </h1>
          </div>

          <hr className="border-gray-200 mt-6 sm:mt-8" />

          <div className="px-2 py-4 sm:px-4 sm:py-6 font-dubai-regular text-[#4a4a4a] text-[18px] sm:text-lg leading-relaxed [&_p]:mb-4 sm:[&_p]:mb-6 [&_ul]:mb-4 sm:[&_ul]:mb-6 [&_li]:mb-2 sm:[&_li]:mb-3">
            <p className="mt-4">
              توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية بيانات المستخدمين في إضافاتنا وتطبيقاتنا، وهي خاصة بـ{" "}
              <strong>مقص دوّن | Dawin Clipper</strong> و<strong>دوّن | Dawin Editor</strong>.
            </p>

            <h2 className="text-[#2368a1] font-dubai-bold text-xl sm:text-2xl mt-6 sm:mt-8 mb-3 sm:mb-4">
              البيانات التي نجمعها
            </h2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-700">
              <li>عنوان الصفحة (Title) وعنوان_URL_</li>
              <li>محتوى الصفحة النصي (النصوص العادية فقط)</li>
              <li>لا نجمع أي بيانات شخصية مثل الاسم أو البريد الإلكتروني أو رقم الهاتف</li>
              <li>لا نقرأ أو نخزن ملفات تعريف الارتباط (Cookies)</li>
            </ul>

            <h2 className="text-[#2368a1] font-dubai-bold text-xl sm:text-2xl mt-6 sm:mt-8 mb-3 sm:mb-4">
              كيفية استخدام البيانات
            </h2>
            <p>
              يتم استخدام البيانات المجمعة <strong>فقط</strong> لغرض واحد وهو تمكين المستخدم من قص محتوى الويب (
              من مقالات وصفحات) وإرساله إلى محرر دوّن لتحريره وتنسيقه. لا نستخدم هذه البيانات لأي غرض آخر ولا نبيعها أو نشاركها مع أي طرف ثالث.
            </p>

            <h2 className="text-[#2368a1] font-dubai-bold text-xl sm:text-2xl mt-6 sm:mt-8 mb-3 sm:mb-4">
              تخزين البيانات
            </h2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-700">
              <li>يتم تخزين القصاصات محلياً على جهاز المستخدم باستخدام chrome.storage.local</li>
              <li>البيانات مخزنة فقط على متصفح المستخدم وليست على أي خادم</li>
              <li>يتم حذف القصاصات تلقائياً بعد 24 ساعة من إنشائها</li>
              <li>محرر دوّن يستخدم IndexedDB المخزن محلياً في المتصفح</li>
            </ul>

            <h2 className="text-[#2368a1] font-dubai-bold text-xl sm:text-2xl mt-6 sm:mt-8 mb-3 sm:mb-4">
              مشاركة البيانات مع أطراف ثالثة
            </h2>
            <p>
              نحن <strong>لا نشارك</strong> أي بيانات مع أطراف ثالثة. جميع البيانات تبقى على جهاز المستخدم ولا تُنقل إلى أي خادم خارجي باستثناء إرسال القصاصة إلى تطبيق محرر دوّن (
              app.dawin.io) عند اختيار خيار &quot;قص إلى دوّن&quot;.
            </p>

            <h2 className="text-[#2368a1] font-dubai-bold text-xl sm:text-2xl mt-6 sm:mt-8 mb-3 sm:mb-4">
              حقوق المستخدم
            </h2>
            <p>
              يحق للمستخدم:
            </p>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-700">
              <li>حذف جميع البيانات عن طريق uninstall إضافة المتصفح</li>
              <li>حذف البيانات عن طريق مسح بيانات المتصفح</li>
              <li>عدم استخدام الخدمة دون أي التزامات</li>
            </ul>

            <h2 className="text-[#2368a1] font-dubai-bold text-xl sm:text-2xl mt-6 sm:mt-8 mb-3 sm:mb-4">
              الأمان
            </h2>
            <p>
              نتخذ إجراءات أمنية مناسبة لحماية بيانات المستخدمين. يتم نقل البيانات بين إضافة المتصفح وتطبيق الويب عبر اتصال آمن (HTTPS).
            </p>

            <h2 className="text-[#2368a1] font-dubai-bold text-xl sm:text-2xl mt-6 sm:mt-8 mb-3 sm:mb-4">
              التغييرات على سياسة الخصوصية
            </h2>
            <p>
              قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم إشعار المستخدمين بأي تغييرات جوهرية من خلال نشر السياسة المحدثة على هذه الصفحة. استمرارك في استخدام الخدمة يعني موافقتك على السياسة المحدثة.
            </p>

            <h2 className="text-[#2368a1] font-dubai-bold text-xl sm:text-2xl mt-6 sm:mt-8 mb-3 sm:mb-4">
              الاتصال بنا
            </h2>
            <p>
              إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا على:{" "}
              <a href="mailto:me@abdelhadi.org" className="text-[#3182ce] hover:underline">
                me@abdelhadi.org
              </a>
            </p>

            <p className="mt-8 text-gray-500 text-sm">
              تاريخ السريان: 4 مايو 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
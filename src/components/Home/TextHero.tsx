import { MoveLeft } from "lucide-react";

const TextHero = () => {
  return (
    <div
      className="px-4 mx-auto  max-w-7xl sm:px-6 text-center"
      dir="rtl"
    >
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-dubai-bold">
        <span className="block text-[#2368a1]">مُحرّر دَوِّن</span>
        <span className="block mt-5">
          أكتب وحرّر مستنداتك{" "}
          <span className="block mt-2 text-[#d97706] sm:inline sm:mt-0">
            بحروف عربية
          </span>
        </span>
      </h1>

      <p className="max-w-md mx-auto mt-3 text-base text-[#6B7280]  sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-dubai-regular">
        أوّل محرّر نصوص ماركداون عربي بمعاينة مباشرة على متصفّحك وهاتفك، يمكنك
        تثبيته أينما أردت، ويعمل دون الحاجة إلى إنترنت.
      </p>

      <div className="mx-auto mt-10 w-fit">
        <a href="https://app.dawin.io/" target="_blank" className="text-[#78350f] bg-[#fae29f] text-[14px] sm:text-[16px] rounded-[6px] px-15 py-4 cursor-pointer flex items-center justify-center gap-2  hover:bg-[#f8d980] font-dubai-regular">
          <span>ابدأ الكتابة الآن</span>
          <MoveLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  );
};

export default TextHero;

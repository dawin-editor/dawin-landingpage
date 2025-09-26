const Footer = () => {
  return (
    <footer className="bg-white font-dubai-regular" dir="rtl">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <a className="text-base text-gray-500 hover:text-gray-900" href="/public">
              الرئيسة
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              className="text-base text-gray-500 hover:text-gray-900"
              href="/public#feature"
            >
              المميزات
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              className="text-base text-gray-500 hover:text-gray-900"
              href="/about"
            >
              حول المحرر
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              className="text-base text-gray-500 hover:text-gray-900"
              href="https://guide.dawin.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              تعلم ماركداون
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              className="text-base text-gray-500 hover:text-gray-900"
              href="/install"
            >
              التثبيت
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              className="text-base text-gray-500 hover:text-gray-900"
              href="/team"
            >
              اقترح فكرة!
            </a>
          </div>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center mt-8 gap-6">
          {/* Twitter */}
          <a
            href="https://twitter.com/elh4di"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/imAbdelhadi"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              ></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/djafer/"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="w-5 h-5"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M511.872 512V511.979H512V324.203C512 232.341 492.224 161.579 384.832 161.579C333.205 161.579 298.56 189.909 284.416 216.768H282.923V170.155H181.099V511.979H287.125V342.72C287.125 298.155 295.573 255.061 350.763 255.061C405.141 255.061 405.952 305.92 405.952 345.579V512H511.872Z"
                fill="#9CA3AF"
              ></path>
              <path
                d="M8.448 170.176H114.603V512H8.448V170.176Z"
                fill="#9CA3AF"
              ></path>
              <path
                d="M61.4827 0C27.5413 0 0 27.5413 0 61.4827C0 95.424 27.5413 123.541 61.4827 123.541C95.424 123.541 122.965 95.424 122.965 61.4827C122.944 27.5413 95.4027 0 61.4827 0V0Z"
                fill="#9CA3AF"
              ></path>
            </svg>
          </a>
        </div>

        {/* Credits */}
        <p className="mt-8 text-base text-center text-gray-600">
          صمّمه وطوّره بكل حب
          <img className="inline w-5 mx-2" src="images/heart.png" alt="love" />
          <a
            className="text-[#1a4d77] hover:underline"
            href="https://blog.abdelhadi.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            عبدالهادي الأندلسي
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

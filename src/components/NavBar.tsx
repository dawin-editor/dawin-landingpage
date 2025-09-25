import { MoveLeft, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  isHome?: boolean;
}

const NavBar = ({ isHome  }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="relative font-dubai-regular z-50 pt-6 pb-16"
      dir="rtl"
      style={{ unicodeBidi: "bidi-override" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="dawin.svg" alt="logo" className="h-10 sm:h-12" />
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-6 xl:gap-10 text-[#6B7280] text-[14px] lg:text-[16px] absolute left-1/2 transform -translate-x-1/2">
            <li className="whitespace-nowrap hover:text-black transition-colors">
              <Link to="/">الرئيسة</Link>
            </li>
            <li className="whitespace-nowrap hover:text-black transition-colors">
              <Link to="/about">حول المحرّر</Link>
            </li>
            <li className="whitespace-nowrap hover:text-black transition-colors">
              <Link 
                to="/#feature" 
                className="hover:underline"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('feature')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                المميزات
              </Link>
            </li>
            <li className="whitespace-nowrap hover:text-black transition-colors">
              <a href="https://guide.dawin.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                دليل الماركداون
              </a>
            </li>
            <li className="whitespace-nowrap hover:text-black transition-colors">
              <Link to="/install">التثبيت</Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex gap-2 items-center">
            <Link to="/contact" className="text-[#1a4d77] text-[14px] sm:text-[16px] rounded-[6px] px-3 sm:px-4 py-2 bg-[#bad7f0] cursor-pointer font-medium hover:bg-[#a0c4e8] transition whitespace-nowrap">
              عن المطوّر
            </Link>
            {!isHome && (
              <Link to="/" className="text-[#78350f] bg-[#fae29f] text-[14px] sm:text-[16px] rounded-[6px] px-4 sm:px-5 py-[9px] cursor-pointer flex items-center gap-2 h-[42px] hover:bg-[#f8d980] transition whitespace-nowrap">
                <span>ابدأ الكتابة</span>
                <MoveLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden ">
            <button
              onClick={toggleMenu}
              className="text-[#6B7280] hover:text-black transition-colors p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="absolute inset-x-0 p-2 top-0 transition origin-top-right transform md:hidden">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="w-auto h-9"
                    src="dawin.svg"
                    alt="Dawin Logo شعار محرر دوّن"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">اغلاق النافذة</span>
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  الرئيسة
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  حول المحرر
                </Link>
                <Link
                  to="/#feature"
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('feature')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  المميزات
                </Link>
                <a
                  href="https://guide.dawin.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  دليل الماركداون
                </a>
                <Link
                  to="/install"
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  التثبيت
                </Link>
                
              </div>
              <div className="px-2 pb-5 space-y-3">
                {!isHome ? (
                  <Link
                    to="/"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-center font-medium bg-[#fae29f] text-[#78350f] hover:bg-[#f8d980] rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>ابدأ الكتابة</span>
                    <MoveLeft className="w-5 h-5" />
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="block w-full px-4 py-3 text-center text-[#1a4d77] bg-[#bad7f0] rounded-md hover:bg-[#a0c4e8] font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    عن المطور
                  </Link>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
  );
};

export default NavBar;
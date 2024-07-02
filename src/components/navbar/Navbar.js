import logo from './../../assets/images/logo.png'


function Navbar() {
  return (
    <>
      <nav className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4 md:px-0">
          <div className="flex items-center w-full flex-wrap md:flex-nowrap">
            <a href="#/" className="flex items-center ml-10 grow ">
              <img
                src={logo}
                className="h-16 ml-16"
                alt="Dawwi Logo"
              />
            </a>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:flex items-center"
              id="navbar-dropdown"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 gap-3 md:gap-7 md:flex-row md grow">
                <li>
                  <a
                    href="#/"
                    className="block py-2 px-3 text-black hover:text-main-color md:p-0 text-lg font-semibold"
                    aria-current="page"
                  >
                    الرئيسية
                  </a>
                </li>

                <li>
                  <a
                    href="#/"
                    className="block py-2 px-3 text-black hover:text-main-color md:p-0 text-lg font-semibold"
                    aria-current="page"
                  >
                    الصيدلية
                  </a>
                </li>

                <li>
                  <a
                    href="#/"
                    className="block py-2 px-3 text-black hover:text-main-color md:p-0 text-lg font-semibold"
                    aria-current="page"
                  >
                    الحساب
                  </a>
                </li>

                <li>
                  <a
                    href="#/"
                    className="block py-2 px-3 text-black hover:text-main-color md:p-0 text-lg font-semibold"
                    aria-current="page"
                  >
                    من نحن
                  </a>
                </li>
              </ul>
              <div className="actions flex gap-4 items-center justify-center">
                <button
                  type="button"
                  className="font-semibold bg-white border-main-color border-2 text-main-color rounded-lg w-32 h-10 hover:bg-main-color hover:text-white transition"
                >
                  تسجيل الدخول
                </button>
                <button
                  type="button"
                  className="font-semibold bg-main-color text-white rounded-lg w-32 h-10 border-main-color border-2 hover:text-main-color hover:bg-white transition"
                >
                  إنشاء حساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

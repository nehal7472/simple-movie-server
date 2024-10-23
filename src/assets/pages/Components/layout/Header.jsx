import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../../../../../public/video-player.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movie Hunter
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              +88 01633-247472
            </Link>
            <Link
              href="#"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/movie"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

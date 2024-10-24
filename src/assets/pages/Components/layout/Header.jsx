import { NavLink } from "react-router-dom";

export default function Header() {
  const isActive = ({ isActive }) =>
    isActive
      ? "text-[#F15E75] dark:text-[#F15E75] hover:underline hover:text-[#F15E75]"
      : "text-gray-900 dark:text-white hover:underline hover:text-[#F15E75]";

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <NavLink
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../../../../../public/video-player.png"
              className="h-8"
              alt=" Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movie Hunter
            </span>
          </NavLink>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <NavLink
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              +88 01633-247472
            </NavLink>
            <NavLink
              href="#"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink to={"/"} className={isActive} aria-current="page">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className={isActive}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={"/movie"} className={isActive}>
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className={isActive}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

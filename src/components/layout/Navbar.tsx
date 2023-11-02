import { MoreVertical } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between mx-auto py-4 px-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center uppercase text-2xl font-semibold whitespace-nowrap dark:text-gray-200">
            TEAMSTATS
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="flex items-center text-gray-200 bg-transparent hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          >
            Talanta
            <MoreVertical className="ml-2" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

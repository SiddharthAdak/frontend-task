import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" z-10 m-auto fixed top-0 left-0 w-screen border-gray-300 border-b-2 flex justify-center px-5 py-4 items-center h-16 backdrop-blur-xl">
      <div className="  max-w-[1350px] flex justify-between w-screen items-center">
        <h2 className=" text-2xl font-semibold text-violet-600">Swapi</h2>

        <div className=" flex gap-5 items-center">
          <Link
            to="/"
            className=" border-violet-600 border-2 py-1 px-2 rounded-md text-violet-600 bg-white font-semibold"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

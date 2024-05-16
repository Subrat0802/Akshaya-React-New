import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";

const Header = () => {
  const [LoginLogout, setLoginLogout] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center px-10 bg-black fixed w-full z-10">
      <div className="text-white flex items-center">
        <img
          className="w-36 mr-5"
          alt="appLogo"
          src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
        />
      </div>
      <div className="">
        <ul className="flex gap-10 text-2xl text-white">
          <li className="flex justify-center items-center">
            {onlineStatus ? (
              <div className=" mt-1 w-4 h-4 rounded-full bg-[#00c544]"></div>
            ) : (
              <div className=" mt-1 w-4 h-4 rounded-full bg-red-700"></div>
            )}
          </li>
          <NavLink to={"/"}>
            <li className="cursor-pointer  hover:text-[#00C544]">Home</li>
          </NavLink>
          <NavLink to={"/offers"}>
            <li className="cursor-pointer  hover:text-[#00C544]">Offers</li>
          </NavLink>
          <NavLink to={"/help"}>
            <li className="cursor-pointer  hover:text-[#00C544]">Help</li>
          </NavLink>
          <li className="cursor-pointer  hover:text-[#00C544]">Cart</li>
          <button
            className="cursor-pointer  hover:text-[#00C544]"
            onClick={() =>
              LoginLogout === "Logout"
                ? setLoginLogout("Login")
                : setLoginLogout("Logout")
            }
          >
            {LoginLogout}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

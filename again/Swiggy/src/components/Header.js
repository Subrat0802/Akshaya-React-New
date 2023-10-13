import { LOGO_URL } from "../utils/constants";
import { useState, useEffect,} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login")
  console.log("header render");

  const onlineStatus = useOnlineStatus()
  // if no dependeny array => useEffect is called on every render
  // if dependency is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] => calles everytime btnNameReact is update 
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact])

  return ( 
    <div className="flex justify-between shadow-lg mb-4 ">
      <div className="logo-container">
        <img
          className="w-80"
          src= {LOGO_URL}
        />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 space-x-8">
          <li>{onlineStatus ? "Online 🟢" : "Offline 🔴"}</li>
          <li>
            <Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => {
            btnNameReact === "Login"? setBtnNameReact("Logout") : setBtnNameReact("Login")
            }}>{btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
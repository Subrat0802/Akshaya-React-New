import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b w-[100%] from-black z-10 flex justify-between">
      <img
        className="opacity-80 w-52"
        src={require("../images/Netflix_Logo_RGB.png")}
        alt="logo"
      />
      {user && (
        <div className="w-32 my-auto flex">
          <img
            className="w-10 rounded-3xl overflow-x-hidden mr-2"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="text-white cursor-pointer font-bold "
          >
            {" "}
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

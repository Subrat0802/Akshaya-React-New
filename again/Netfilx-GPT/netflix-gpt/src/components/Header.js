import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmont
    return () => unsubscribe();
  }, []);

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
            className="w-10 rounded-xl overflow-x-hidden mr-2"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="cursor-pointer font-bold text-gray-200"
          >
            {" "}
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

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

  const handleGptSearchClick = () => {
    //toggle gpt
    dispatch(toggleGptSearchView());
  }

  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b w-[100%] from-black z-10 flex justify-between">
      <img
        className="opacity-80 w-48"
        src={require("../images/Netflix_Logo_RGB.png")}
        alt="logo"
      />
      {user && (
        <div className="my-auto flex">
          <button className="text-white pr-4" >Home</button>
          <button className="text-white pr-4" >Popular</button>
          <button className="text-white pr-4" >Kid's</button>
          <button className="text-white pr-4" onClick={handleGptSearchClick}>GPT Recommendation</button>
          
          <button
            onClick={handleSignOut}
            className="cursor-pointer  text-gray-200"
          >
            {" "}
            Logout
          </button>
          <img
            className="w-10 rounded-sm overflow-x-hidden ml-3"
            src={user?.photoURL}
          />
        </div>
      )}
    </div>
  );
};

export default Header;

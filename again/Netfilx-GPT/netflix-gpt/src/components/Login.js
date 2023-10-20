import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { background_url } from "./constatnts";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);

    if (message) return;

    //signin / signup logic
    if (!isSignInForm) {
      //signUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className="overflow-x-hidden opacity-95"
          src={background_url}
          alt="bgImage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-opacity-90 rounded-lg absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white flex 
        flex-col px-8 pb-16"
      >
        <h1 className="text-3xl font-bold py-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="Text"
            placeholder="Full Name"
            className="p-2 m-2 bg-gray-700 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-700 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-700 rounded-sm"
        />
        <p className="text-red-600 mx-2">{errMessage}</p>
        <button
          className="m-2 my-4 p-2 bg-red-700 rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="mx-4 cursor-pointer hover:text-red"
          onClick={toggleSignInForm}
        >
          {!isSignInForm
            ? "Already registered? Sign In Now"
            : "New to Netflix? Sign Up Now?"}
        </p>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="overflow-x-hidden" src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="bgImage"/>
      </div>
      <form className="bg-opacity-90 rounded-lg absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white flex 
        flex-col px-8 pb-16">
        <h1 className="text-3xl font-bold py-4 m-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {isSignInForm && <input type="Text" placeholder="Full Name" className="p-2 m-2 bg-gray-700 rounded-sm"/>}
        <input type="text" placeholder="Email Address" className="p-2 m-2 bg-gray-700 rounded-sm"/>        
        <input type="password" placeholder="Password" className="p-2 m-2 bg-gray-700 rounded-sm"/>
        <button className="m-2 my-4 p-2 bg-red-700 rounded-sm">
            {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mx-4 cursor-pointer" onClick={toggleSignInForm}>
           {isSignInForm ? "New to Netflix? Sign Up Now?" : "Already registered? Sign In Now "} 
        </p>
      </form>
    </div>
  );
};

export default Login;

//w-3/12 my-36 mx-auto right-0 left-0
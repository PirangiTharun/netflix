import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const toggleSignIn = () => {
    setIsSignin(!isSignin);
  };
  return (
    <div
      style={{
        backgroundImage: `url(
          "https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        )`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header />
      <form className="absolute flex flex-col gap-8 justify-center p-10 bg-black bg-opacity-90 rounded-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-3xl text-white font-semibold">
          {isSignin ? "Sign in" : "Sign up"}
        </h1>
        <input
          className="px-4 py-2 bg-[#333] rounded-sm"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="px-4 py-2 bg-[#333] rounded-sm"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-600 px-4 py-2 rounded-sm w-[100%]">
          {isSignin ? "Sign in" : "Sign up"}
        </button>
        <p className="text-white">
          {isSignin ? "Are you new to netflix?" : "Already have an account?"}{" "}
          <span className="cursor-pointer" onClick={toggleSignIn}>
            {isSignin ? "Sign up here" : "Sign in here"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
// import { singInAPI } from "../../Features/Firebase/FirebaseSlice";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate("/Home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex content-start sm:min-h-[700px] pb-[138px] pt-[40px] py-16 px-0 relative flex-wrap w-full max-w-[1128px] min-h-0 items-center m-auto sm:m-auto">
      <div className="w-full">
        <h1 className="pb-0 sm:w-[55%] w-full text-[20px] text-center sm:text-start leading-[2] sm:text-[56px] text-[#2977c9] font-extralight sm:leading-[70px] ">
          Welcome to your professional community
        </h1>

        <img
          src="\src\assets\images\login-hero.svg"
          alt="home-logo"
          className="sm:w-[700px] sm:h-[670px] sm:absolute sm:-bottom-0.5 sm:-right-36 top-56 w-auto h-auto static"
        />
        <div className="sm:mt-24 sm:w-[408px] mt-5 ">
          <Link>
            <button
              className="flex justify-center bg-[#fff] items-center h-[56px] w-full rounded-4xl shadow-[inset_0_0_0_1px_rgb(0_0_0_/_60%)_,_inset_0_0_0_2px_rgb(0_0_0_/0%),inset_0_0_0_1px_rgb(0_0_0_/_0%)] align-middle z-0 transition-[167ms] text-[15px] sm:text-[20px] text-[rgba(0,0,0,0.6)] hover:bg-[rgba(207,207,207,0.25)] hover:text-[rgba(0,0,0,0.75)]"
              onClick={handleGoogleSignIn}
            >
              <img src="\src\assets\images\google.svg" alt="Google-logo" />
              Sigh in with Google
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

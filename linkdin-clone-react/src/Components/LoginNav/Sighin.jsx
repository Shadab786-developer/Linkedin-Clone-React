import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Sign in component with email and Google authentication
function Sighin() {
  // Navigation hook
  const navigate = useNavigate();

  // Form data state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Error handling state
  const [error, setError] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Google sign in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle email/password sign in
  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(result.user);
      navigate("/Home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    // Sign in form layout
    <div className="min-h-screen bg-[#f3f2ef]">
      <div className="max-w-[1128px] mx-auto px-4 mt-10 flex flex-col-reverse md:flex-row items-center justify-center pt-[30%]">
        <div className="w-full md:w-1/2 space-y-8 ">
          <div className="max-w-[408px]">
            <img src="\src\assets\images\login-logo.svg" alt="Login-logo" />
            <form onSubmit={handleEmailSignIn} className="space-y-4 pt-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-[#0a66c2]"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-[#0a66c2]"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#0a66c2] text-white font-medium hover:bg-[#004182] transition-colors"
              >
                Sign in
              </button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 py-3 border border-gray-400 rounded-full hover:bg-gray-100 transition-colors"
            >
              <img
                src="/src/assets/images/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-gray-600">Sign in with Google</span>
            </button>

            <p className="mt-8 text-center">
              New to LinkedIn?{" "}
              <Link
                to="/signup"
                className="text-[#0a66c2] font-medium hover:underline"
              >
                Join now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sighin;

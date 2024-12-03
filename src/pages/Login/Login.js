import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Login() {
  const handleSocialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Error during social login:", error);
    }
  };
  return (
    <>   
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#050505" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/Forgot-password" className="font-semibold text-lime-500 hover:text-lime-700">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <p className="text-center text-sm text-gray-950">
            <span id="toggle-text">Don't have an account?</span>
            <a href="/Sign up"id="toggle-link"  className="text-gray-950 hover:text-stone-50 font-semibold" onclick="toggleForm()" >Sign up</a></p>
          </form>

          <div className="mt-6">
            <div className="text-center text-sm/6 text-gray-500">Or sign in with</div>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => handleSocialLogin(new GoogleAuthProvider())}
                className="flex items-center justify-center rounded-md bg-red-500 px-3 py-2 text-white shadow-sm hover:bg-red-400"
              >
                Google
              </button>
              <button
                onClick={() => handleSocialLogin(new FacebookAuthProvider())}
                className="flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-white shadow-sm hover:bg-blue-500"
              >
                Facebook
              </button>
              <button
                onClick={() => handleSocialLogin(new TwitterAuthProvider())}
                className="flex items-center justify-center rounded-md bg-blue-400 px-3 py-2 text-white shadow-sm hover:bg-blue-300"
              >
                Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


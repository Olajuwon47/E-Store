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

export default function Signup() {
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
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
          <div id="username-field">
          <label className="block text-sm font-medium text-gray-900">Username</label>
          <div className="relative mt-2">
            <ion-icon name="person-outline" className="absolute top-1/2 left-3 -translate-y-1/2 text-black"></ion-icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            <input type="text" required className="pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
          </div>
        </div>
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

            <div id="confirm-password-field">
                <label className="block text-sm font-medium text-gray-900">Confirm Password</label>
                <div className="relative mt-2">
                  <ion-icon className="lock-closed-outline absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></ion-icon>
                  <input type="password" required className="pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"/>
                  <button type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-400 focus:outline-none">
                    <ion-icon className="eye-off-outline"></ion-icon>
                  </button>
                </div>
              </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-lime-950 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
            <p className="text-center text-sm text-gray-950">
            <span id="toggle-text">Already have an account?</span> <a href="/Login" id="toggle-link" className="text-gray-950 hover:text-slate-50 font-semibold" onclick="toggleForm()">Sign in</a></p>          
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



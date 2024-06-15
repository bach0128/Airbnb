"use client";
import { useState } from "react";
// import { login } from "./auth/session";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
const { client } = require("../../../../components/config/user/api");
import { login } from "../auth/session";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const [err, setErr] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const router = useRouter();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = await e.target[0].value;
    const password = await e.target[1].value;
    if (validateEmail(email)) {
      const res = await signIn(
        "credentials",
        { email, password },
        {
          callbackUrl: `${window.location.origin}`,
        }
      );
      // if (response.status !== 200) {
      //   setErr(data.message);
      // } else {
      //   const expires = new Date(Date.now() + 10 * 1000);
      //   const { user } = data.data;
      //   setCookie("user", { user: user, expires: expires });
      //   setErr("");
      setShowLogin(false);
      router.push("/");
      // }
    } else {
      setErr("Email is invalid");
    }
    // e.target.reset();
  };
  return (
    <>
      {showLogin && (
        <div className="flex min-h-full min-w-full flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleLogin}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="john_8080@gmail.com"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {err && (
                <span className="w-full inline-block text-sm text-center text-red-700">
                  {err}
                </span>
              )}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

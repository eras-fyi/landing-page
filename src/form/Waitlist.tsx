import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { PostgrestSingleResponse } from "@supabase/postgrest-js/src/types";
import { useMutation } from "@tanstack/react-query";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

import type { Database } from "@/types/supabase";

type InsertResponse = PostgrestSingleResponse<null>;

const Waitlist = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>(),
  );

  useEffect(() => {
    setError(false);
  }, [email]);

  const { mutate, isLoading, isSuccess } = useMutation(
    ["waitlist"],
    async (e: FormEvent): Promise<InsertResponse> => {
      e.preventDefault();
      return supabaseClient.from("subscriber").insert({ email }).throwOnError();
    },
    {
      onError: () => setError(true),
    },
  );

  return (
    <div className="p-6 lg:px-8">
      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
        Join the <b>eras</b> Waitlist
      </h3>
      {isSuccess ? (
        <div className="text-lg text-green-600 dark:text-green-400">
          Thank you for your interest in <b>eras</b>!
        </div>
      ) : (
        <form className="space-y-6" action="#" onSubmit={mutate}>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
              placeholder="name@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && (
            <div className="text-md text-red-600 dark:text-red-400">
              An error occurred, please try again
            </div>
          )}
          {!isLoading ? (
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Subscribe
            </button>
          ) : (
            <div className="text-slate-600 dark:text-slate-400">Loading</div>
          )}
        </form>
      )}
    </div>
  );
};

export { Waitlist };

/* NOTE: saving this code for the future */

/* <div className="p-6 lg:px-8">
  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
    Sign in to our platform
  </h3>
  <form className="space-y-6" action="#">
    <div>
      <label
        htmlFor="email"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
        placeholder="name@company.com"
        required
      />
    </div>
    <div>
      <label
        htmlFor="password"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Your password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
        required
      />
    </div>
    <div className="flex justify-between">
      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
      <a
        href="#"
        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
      >
        Lost Password?
      </a>
    </div>
    <button
      type="submit"
      className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login to your account
    </button>
    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered?{" "}
      <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
        Create account
      </a>
    </div>
  </form>
</div>; */

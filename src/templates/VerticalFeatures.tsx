import type { FormEvent } from "react";
import { useState } from "react";

import { Background } from "@/background/Background";
import { Modal } from "@/modal/Modal";

import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const toggleModalVisibility = (e: FormEvent) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: send an email to the CRM
    console.log("Submitted: ", email);
  };

  return (
    <Background color="bg-blue-50 dark:bg-blue-950">
      <Section
        title="We're with you on each step of your financial journey"
        description=""
        id="how-it-works"
      >
        <VerticalFeatureRow
          title="Make an Action Plan"
          description="Use our AI-tool to identify a goal you have - it doesn’t even have to be financial - and get inspired by links in each step."
          image="/assets/images/feature.svg"
          imageAlt="First feature alt text"
          buttonText="Get Started"
          buttonLink="https://app.eras.fyi"
          buttonPrimary
        />
        <VerticalFeatureRow
          title="Follow Our Guidance"
          description="For £5 a week - the price of a sandwich - we’ll do everything to ensure you follow through on your plan. We'll call you, set calendar invites, message you on your favourite platforms. What method works best for you? Don’t be shy - let us know!"
          image="/assets/images/feature2.svg"
          imageAlt="Second feature alt text"
          reverse
          buttonText="Join Waitlist"
          buttonLink="/"
          buttonOnClick={toggleModalVisibility}
        />
        <VerticalFeatureRow
          title="Automate It"
          description="When you’ve achieved your goals, we’ll automate the maintenance of it. No longer will you have to worry about this goal - let’s move on to the next!"
          image="/assets/images/feature3.svg"
          imageAlt="Third feature alt text"
          buttonText="Join Waitlist"
          buttonLink="/"
          buttonOnClick={toggleModalVisibility}
        />
        <Modal show={showModal} toggleModal={toggleModalVisibility}>
          <div className="p-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Join the <b>eras</b> Waitlist
            </h3>
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
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
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* NOTE: saving this code for the future */}
          {/* <div className="p-6 lg:px-8">
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
                <a
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </form>
          </div> */}
        </Modal>
      </Section>
    </Background>
  );
};

export { VerticalFeatures };

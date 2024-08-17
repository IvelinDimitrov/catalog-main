import React, { useState } from "react";
export default function NewsLetters() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }
  return (
    <section
      id="subscribe"
      className="bg-background-color py-4 border-t-2 border-b-2 text-green-tx"
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
          <div className="mb-4 sm:mb-8 lg:mb-0">
            <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-left lg:text-3xl">
              Stay Updated
            </h2>
            <p className="text-center text-white lg:text-left">
              Subscribe to our newsletter
            </p>
          </div>
          <div className="flex flex-col items-center w-96 lg:items-end">
            {!isEmailValid ? <p>Please enter a valid email address</p> : null}
            <form className="flex w-full gap-2" onSubmit={handleSubmit}>
              <input
                value={email}
                onChange={handleInput}
                placeholder="Enter your email address"
                className="bg-gray-white w-full flex-1 rounded px-3 py-2 text-gray-txt placeholder-gray-dark focus:outline-none border-2"
              />
              <button
                type="submit"
                className="inline-block rounded px-8 py-2 text-center text-sm font-semibold md:text-base hover:bg-green-tx hover:text-navi border-2 "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Title from "./Title";
function Contact() {
  return (
    <div className="flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/b8b480ce-2580-4473-9da6-25e4fae6eb5e"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center mx-auto inline-block px-8 py-3 w-max text-base font-medium rounded-md text-stone-900 border-4 hover:bg-stone-900 hover:text-white 
            hover:border-white 
            hover:scale-110
            drop-shadow-md 
            dark:text-white dark:hover:bg-white dark:hover:text-stone-900  dark:hover:border-black"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

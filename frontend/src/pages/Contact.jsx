import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="max-w-xl mx-auto p-8 border-2 border-gray-700 rounded-lg bg-white shadow-lg">
        <h1 class="text-3xl font-bold text-gray-800 uppercase tracking-widest text-center mb-4">
          &bull; Keep in Touch &bull;
        </h1>
        <div class="w-20 border-b-2 border-gray-700 mx-auto mb-6"></div>

        <div class="flex justify-center mb-6">
          <svg
            class="h-12 w-12 text-gray-700 fill-current"
            viewBox="0 0 145.192 145.192"
          >
            <path d="..."></path>
          </svg>
        </div>

        <form action="#" method="post" class="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="My name is"
              class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="My e-mail is"
              class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="telephone"
              placeholder="My number is"
              class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
          </div>
          <div>
            <select
              name="subject"
              class="w-full border border-gray-300 rounded-md p-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            >
              <option disabled hidden selected>
                Subject line
              </option>
              <option>I'd like to start a project</option>
              <option>I'd like to ask a question</option>
              <option>I'd like to make a proposal</option>
            </select>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              rows="5"
              class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            ></textarea>
          </div>
          <div class="text-center">
            <input
              type="submit"
              value="Send Message"
              class="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

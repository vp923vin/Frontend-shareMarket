import React from "react";

const Feedback = () => {
  return (
    <section className="transition-colors duration-500 text-gray-900 dark:bg-gray-800 dark:text-white overflow-scroll h-screen items-center sm:flex">

      <div className="container mx-auto flex flex-col md:flex-row ">
        <div className="flex flex-col w-full lg:w-1/3 p-4 lg:p-8">
          <p className="ml-6 text-lg uppercase tracking-loose text-green-700 dark:text-green-500">
            REVIEW
          </p>
          <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
            Leave us a feedback!
          </p>
          <p className="text-sm md:text-base leading-snug  dark:text-gray-300">
            Please provide your valuable feedback and suggestions...
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-2/3 justify-center">
          <div className="container w-full sm:px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 sm:shadow-lg rounded-lg dark:border ">
                  <div className="flex-auto lg:p-10">
                    <h4 className="text-2xl mb-4  dark:text-white font-semibold">
                      Have a suggestion?
                    </h4>
                    <form id="feedbackForm" action="" method="">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase  text-xs font-bold mb-2 dark:text-gray-300"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 dark:bg-gray-300 placeholder-black text-gray-900 dark:text-gray-100 outline-none focus:bg-gray-400"
                          placeholder="Your email"
                          required
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase  text-xs font-bold mb-2 dark:text-gray-300"
                          htmlFor="feedback"
                        >
                          Feedback
                        </label>
                        <textarea
                          name="feedback"
                          id="feedback"
                          rows="4"
                          cols="80"
                          className="border-0 px-3 py-3 bg-gray-300 dark:bg-gray-300 placeholder-black text-gray-900 dark:text-gray-100 rounded text-sm shadow focus:outline-none w-full"
                          placeholder="Your feedback"
                          required
                        ></textarea>
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-green-600 text-white active:bg-yellow-400 text-sm font-bold uppercase px-8 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition-colors duration-500"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;

import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className=" sm:px-6 lg:px-24 py-10  dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_65%] gap-5">
          <div>
            <h1 className="text-2xl font-normal leading-relaxed mb-4 dark:text-white">
              TollFree Numbers
            </h1>
            <div>
              <ul>
                <li className="flex items-center border-b pb-1.5 mb-2 border-gray-500 dark:border-gray-600">
                  <span className="flex items-center text-lg">
                    <FaGlobeAfrica className="mr-2" /> United States:
                  </span>
                  <span className="pl-2"> +91 1234 567 890</span>
                </li>
                <li className="flex items-center border-b pb-1.5 mb-2 border-gray-500 dark:border-gray-600">
                  <span className="flex items-center text-lg">
                    <FaGlobeAfrica className="mr-2" /> India:
                  </span>
                  <span className="pl-2"> +91 1234 567 890</span>
                </li>
                <li className="flex items-center border-b pb-1.5 mb-2 border-gray-500 dark:border-gray-600">
                  <span className="flex items-center text-lg">
                    <FaGlobeAfrica className="mr-2" /> China:
                  </span>
                  <span className="pl-2"> +91 1234 567 890</span>
                </li>
                <li className="flex items-center border-b pb-1.5 mb-2 border-gray-500 dark:border-gray-600">
                  <span className="flex items-center text-lg">
                    <FaGlobeAfrica className="mr-2" /> Canada:
                  </span>
                  <span className="pl-2"> +91 1234 567 890</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:pr-10">
            <h1 className="text-2xl font-normal leading-relaxed mb-4 dark:text-white">
              Enquiry Form
            </h1>

            <div>
              <div className="flex gap-5 w-full mb-4 group">
                <input
                  type="text"
                  name="first_name"
                  className="block py-2.5 px-1 w-full text-lg bg-transparent border-b outline-none border-gray-500 dark:border-gray-600 dark:text-white"
                  placeholder="First name*"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  className="block py-2.5 px-1 w-full text-lg bg-transparent border-b outline-none border-gray-500 dark:border-gray-600 dark:text-white"
                  placeholder="Last Name*"
                  required
                />
              </div>
              <div className="flex gap-5 w-full mb-3 group">
                <input
                  type="text"
                  name="email"
                  className="block py-2.5 px-1 w-full text-lg bg-transparent border-b outline-none border-gray-500 dark:border-gray-600 dark:text-white"
                  placeholder="Email*"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  className="block py-2.5 px-1 w-full text-lg bg-transparent border-b outline-none border-gray-500 dark:border-gray-600 dark:text-white"
                  placeholder="Phone"
                  required
                />
              </div>

              <textarea
                rows="3"
                className="block p-2.5 w-full text-lg outline-none border-b border-gray-500 dark:border-gray-600 dark:text-white"
                placeholder="Message..."
              />
            </div>

            <button className="px-4 py-2.5 rounded-sm mt-4 bg-green-500 text-white hover:bg-green-600 transition-colors">
              Send Message
            </button>
          </div>
        </div>

        <div className="my-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7360.688444351851!2d75.87430490000001!3d22.71544370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712659047940!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

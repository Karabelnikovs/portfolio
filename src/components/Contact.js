import React, { useRef } from "react";
import { scrollTo } from "../utils/scroll";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5d6r2kr", "template_h8lozeh", form.current, {
        publicKey: "I0vqyG5zyK4S-qgch",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your're message have been sent!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    document.getElementsByName("user_name").value = "";
    document.getElementsByName("user_email").value = "";
    document.getElementsByName("message").value = "";
  };

  return (
    <div
      id="contact"
      className="bg-gray-200 py-16 text-gray-800 snap-start w-screen h-screen flex-shrink-0"
    >
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">
          Feel free to reach out to me via email at{" "}
          <span className="text-purple-500">nikolajlivshic@gmail.com</span>
        </p>
        <form
          className="space-y-4 md:w-96 sm:w-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <label className="block text-lg">Name</label>
            <input
              name="user_name"
              required
              placeholder="Name.."
              type="text"
              className="w-full border border-gray-300 p-2 rounded-xl focus:scale-105 transition duration-300"
            />
          </div>
          <div>
            <label className="block text-lg">Email</label>
            <input
              name="user_email"
              required
              placeholder="Email.."
              type="email"
              className="w-full border border-gray-300 p-2  rounded-xl focus:scale-105 transition duration-300"
            />
          </div>
          <div>
            <label className="block text-lg">Message</label>
            <textarea
              name="message"
              required
              placeholder="Message.."
              className="w-full border border-gray-300 p-2  rounded-xl focus:scale-105 transition duration-300"
              rows="4"
            ></textarea>
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="w-48 bg-purple-500 px-4 py-2 rounded-xl hover:bg-purple-700 transform transition duration-300 hover:scale-105 cursor-pointer hover:shadow-xl text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

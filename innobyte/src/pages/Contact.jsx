import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <div className="flex  justify-center items-center min-h-[100vh] w-full">
        <div className="bg-[#E82574] gap-6 py-14 px-3 text-2xl flex flex-col justify-start rounded-xl w-[25%] text-white">
          <p className="text-4xl font-bold">Contact Info</p>
          <p className="flex items-center  gap-2">
            <FaLocationDot />
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156{" "}
          </p>
          <p className="flex items-center gap-2">
            <AiOutlineMail />
            kkghosh0099@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <AiOutlinePhone />
            +91 9007062180
          </p>
        </div>
        <div className=" w-[50%] flex flex-col justify-center items-center ">
          <p className="text-4xl text-[#E82574] mb-6 font-semibold">
            Send us a message
          </p>
          <form>
            <div className="flex gap-10 mb-4">
              <input
                placeholder="First Name"
                type="text"
                className=" border-b-2  border-black"
              />
              <input
                placeholder="Last Name"
                type="text"
                className=" border-b-2 border-black"
              />
            </div>

            <div className="flex gap-10">
              <input
                placeholder="Email"
                type="text"
                className=" border-b-2 text-black border-black "
              />
              <input
                placeholder="Name"
                type="Mobile"
                className=" border-b-2 border-black"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                type="text"
                className=" border-b-2 border-black mt-4 h-40 w-96 "
              />
            </div>
            <button
              className="bg-[#E82574] w-full mt-5  py-2 px-3 rounded-xl font-semibold hover:bg-[#4db5cf] transition-all duration-200"
              onClick={() => alert("Message Sent")}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1718369172713!5m2!1sen!2sin"
        className="w-full"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;

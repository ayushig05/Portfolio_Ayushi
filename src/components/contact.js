import React from "react";
import { 
  useState, 
  useRef 
} from "react";
import { 
  FaGithub, 
  FaLinkedin 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    message: "",
  });

  const form = useRef();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email } = formData;
    let hasError = false;

    const updatedErrors = {
      name: name.trim() === "",
      phone: phone.trim() === "",
      email: !validateEmail(email.trim()),
      message: "",
    };

    if (updatedErrors.name) {
      updatedErrors.message = "Please enter your name!";
      hasError = true;
    } else if (updatedErrors.phone) {
      updatedErrors.message = "Please enter your phone number!";
      hasError = true;
    } else if (updatedErrors.email) {
      updatedErrors.message = "Please enter a valid email!";
      hasError = true;
    }

    setErrors(updatedErrors);

    if (!hasError) {
      emailjs
        .sendForm(
          "service_hm2ybgq",
          "template_7r0imsf",
          form.current,
          "qYbHqtWuyCax3o9j"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormData({
              name: "",
              phone: "",
              email: "",
              message: "",
            });
            setErrors({
              name: false,
              phone: false,
              email: false,
              message: "Your message has been sent!",
            });
          },
          (error) => {
            console.log("Error sending email: ", error);
            setErrors({
              ...errors,
              message: "Failed to send the message. Please try again!",
            });
          }
        );
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full mt-10 mb-20"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className="w-2/3 md:w-3/4 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 mt-8">
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4"
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h2 className="text-4xl font-bold font-spaceGrotesk text-white text-center md:text-left">
            Contact
          </h2>
          <p className="text-gray-400 text-center font-spaceGrotesk md:text-left">
            If you have any queries, feel free to reach out. Drop a message, and
            I'll get back to you as soon as possible.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://github.com/ayushig05"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border border-purple-500 text-xl inline-flex items-center justify-center rounded-md hover:shadow-lg hover:shadow-purple-500/50 hover:text-purple-500 cursor-pointer duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushi-gupta-213466289/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border border-purple-500 text-xl inline-flex items-center justify-center rounded-md hover:shadow-lg hover:shadow-purple-500/50 hover:text-purple-500 cursor-pointer duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/ayushigupta_04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border border-purple-500 text-xl inline-flex items-center justify-center rounded-md hover:shadow-lg hover:shadow-purple-500/50 hover:text-purple-500 cursor-pointer duration-300"
            >
              <FaXTwitter />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 font-spaceGrotesk"
          initial={{
            x: 200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <form ref={form} className="w-full space-y-4" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              id="name"
              name="from_name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full border-b-2 p-2 bg-transparent text-white focus:outline-none ${
                errors.name ? "border-red-500" : "border-purple-500"
              }`}
              initial={{
                y: -50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
            />
            <motion.input
              type="text"
              id="phone"
              name="from_phno"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full border-b-2 p-2 bg-transparent text-white focus:outline-none ${
                errors.phone ? "border-red-500" : "border-purple-500"
              }`}
              initial={{
                y: -50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
              }}
            />
            <motion.input
              type="email"
              id="email"
              name="from_email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full border-b-2 p-2 bg-transparent text-white focus:outline-none ${
                errors.email ? "border-red-500" : "border-purple-500"
              }`}
              initial={{
                y: -50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
            />
            <motion.textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full h-24 border-b-2 p-2 bg-transparent text-white focus:outline-none border-purple-500"
              initial={{
                y: -50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
              }}
            ></motion.textarea>
            {errors.message && (
              <motion.p
                className={`text-sm ${
                  errors.message.includes("sent")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                {errors.message}
              </motion.p>
            )}
            <motion.button
              type="submit"
              className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition w-full"
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

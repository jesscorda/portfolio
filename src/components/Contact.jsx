import { useState } from "react";
import { ContactIllustration } from "../assets";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Circles } from "react-loader-spinner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const controls = useAnimation();

  const onFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: import.meta.env.VITE_APP_EMAILJS_TO_NAME,
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAILJS_TO_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          controls.start({ x: "-100%" });
          setShowSuccessMsg(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setShowSuccessMsg(false);
          console.error(error);

          alert(
            "Whoops! That error message is certainly not what we want to see. We apologize for the inconvenience and appreciate your patience as we work to resolve the issue."
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col bg-slate-gray p-10 shadow-2xl m-auto gap-5 rounded-xl"
    >
      <h2 className="text-4xl text-charcoal">Contact Me</h2>
      <motion.div className="flex flex-col lg:flex-row items-center justify-between">
        <AnimatePresence>
          {!showSuccessMsg && (
            <motion.form
              initial={{ x: 0 }}
              animate={controls}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              action=""
              className="flex flex-col gap-3 font-ptserif w-full lg:w-[50%]"
              onSubmit={onFormSubmit}
            >
              <label htmlFor="name" className="flex flex-col">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="rounded-md p-2 outline-none"
                />
              </label>
              <label htmlFor="email" className="flex flex-col">
                <span>Email</span>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="rounded-md p-2 outline-none"
                />
              </label>
              <label htmlFor="message" className="flex flex-col">
                <span>Message</span>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="rounded-md p-2 outline-none"
                ></textarea>
              </label>
              <button
                className="p-2 bg-melon mt-5 rounded-md text-charcoal font-metropolis"
                type="submit"
              >
                {loading ? (
                  <Circles
                    height="24"
                    width="24"
                    color="#2a424d"
                    ariaLabel="circles-loading"
                    wrapperClass="m-auto"
                    wrapperStyle={{ justifyContent: "center" }}
                  />
                ) : (
                  "Submit"
                )}
              </button>
            </motion.form>
          )}
          {showSuccessMsg && !loading && (
            <motion.div
              className="w-1/2"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p className="text-columbia-blue text-2xl">
                Thanks for reaching out! I'll get back to you soon. In the
                meantime, feel free to check out my portfolio. Looking forward
                to connecting.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <img
            src={ContactIllustration}
            alt="person sitting on a couch and working"
            width={500}
            height={500}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

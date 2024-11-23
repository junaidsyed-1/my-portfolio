import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const textAnimationVariants = {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
  };

  const cardAnimationVariants = {
    initial: { opacity: 0, y: 200 },
    animate: { opacity: 1, y: 0 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    try {
      const result = await emailjs.send(
        import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.REACT_APP_EMAILJS_USER_ID
      );

      setFormData({ name: "", email: "", message: "" });
      setIsSubmit(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <div className="py-16 flex justify-center bg-base-200">
      <div className="w-full max-w-7xl">
        <motion.div
          variants={textAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          layout
        >
          <h2 className="text-2xl font-semibold text-error text-center">
            Contact Me
          </h2>
          <h2 className="my-5 text-5xl font-bold text-center">
            Drop Me a Line
          </h2>
        </motion.div>
        <motion.div
          variants={cardAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
          layout
        >
          <div className="space-y-8">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-lg font-bold">Email Me</h3>
                <p className="text-gray-600">junaidsd04@gmail.com</p>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-lg font-bold">Call Me</h3>
                <p className="text-gray-600">+91-931-8420-702</p>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-lg font-bold">Send Me a Message</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                    required
                    minLength="3"
                    maxLength="50"
                    pattern="^[A-Za-z\s]+$"
                    title="Name can only contain letters and spaces."
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                    maxLength="100"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    minLength="10"
                    maxLength="500"
                    className="textarea textarea-bordered w-full"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-control mt-4">
                  <button
                    type="submit"
                    disabled={isSubmit}
                    className="btn btn-error w-full"
                  >
                    {isSubmit ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

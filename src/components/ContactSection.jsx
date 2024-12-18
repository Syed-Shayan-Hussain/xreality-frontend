import React, { useEffect, useState } from "react";
import img from "../assets/Connect-with-us.png";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${window.location.protocol}//${window.location.host}/api.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsSubmitted(true);
          // Reset the form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          setError(data.message || "Failed to send message.");
        }
      })
      .catch((error) => {
        setError("Error occurred while sending message.");
      });
  };

  useEffect(() => {
    if (isSubmitted || error) {
      const timeoutId = setTimeout(() => {
        setIsSubmitted(false);
        setError("");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [isSubmitted, error]);

  return (
    <>
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {/* Left Side - Contact Form */}
          <div className="w-full md:w-1/2">
            <h3 className="flex items-center font-semibold mb-2">
              <div className="w-12 h-[2px] bg-primary mr-2"></div>
              Get in Touch with XReality EDU
            </h3>
            <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
            <p className="text-gray-500 mb-8">
              Have questions or need more information? We're here to help! Reach
              out to us through any of the following methods, and our team will
              get back to you as soon as possible.
            </p>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 w-full flex flex-col items-center"
            >
              {isSubmitted && (
                <div
                  className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
                  role="alert"
                >
                  Thank you, your submission has been received.
                </div>
              )}
              {error && (
                <div
                  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                  role="alert"
                >
                  Something went wrong.
                </div>
              )}
              <input
                type="text"
                name="name"
                value={formData.name} // Reset form input
                placeholder="Your Full Name*"
                className="w-full p-4 border border-gray-300 rounded-full"
                required
                pattern="[A-Za-z ]+"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={formData.email} // Reset form input
                placeholder="Your Email*"
                className="w-full p-4 border border-gray-300 rounded-full"
                required
                onChange={handleChange}
              />
              <textarea
                placeholder="Write a message..."
                name="message"
                value={formData.message} // Reset textarea input
                className="w-full p-4 border border-gray-300 rounded-xl h-32"
                required
                onChange={handleChange}
              ></textarea>
              <button className="bg-primary text-white font-bold py-3 px-8 rounded-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              loading="lazy"
              src={img}
              alt="Chat Bubble Illustration"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;

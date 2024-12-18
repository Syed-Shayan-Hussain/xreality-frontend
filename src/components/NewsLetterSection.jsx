import React, { useEffect, useState } from "react";
// import img from "../assets/Subscribe.png";
import NewsLetter from "../assets/Newsletter.mp4";

function NewsletterSection() {
  const [formData, setFormData] = useState({
    email: "",
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

    fetch(
      `${window.location.protocol}//${window.location.host}/api-email.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsSubmitted(true);
          setFormData({
            email: "",
          });
        } else {
          setError(data.message || "Failed to send message.");
        }
      })
      .catch(() => {
        setError("Error occurred while sending message.");
        setFormData({
          email: "",
        });
      });
  };

  useEffect(() => {
    if (isSubmitted || error) {
      const timeoutId = setTimeout(() => {
        setIsSubmitted(false);
        setError("");
      }, 5000); // Reset after 5 seconds

      return () => clearTimeout(timeoutId);
    }
  }, [isSubmitted, error]);

  return (
    <div className="bg-primary py-16">
      <div className="relative">
        <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-6 lg:px-20">
          {/* Left Side - Text and Subscription Form */}
          <div className="lg:w-1/2 text-white text-center lg:text-left mb-10 lg:mb-0">
            <h3 className="font-medium text-xl mb-4 flex items-center gap-8">
              <span className="bg-white h-0.5 w-16 block"></span> Subscribe Now
            </h3>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join us today and discover how XReality Education is setting the
              standard for future-focused learning.
            </h2>

            {/* Success and Error Messages */}
            {isSubmitted && (
              <div
                className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 w-fit mx-auto"
                role="alert"
              >
                Thank you, your submission has been received.
              </div>
            )}
            {error && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 w-fit mx-auto"
                role="alert"
              >
                Something went wrong.
              </div>
            )}

            {/* Subscription Form */}
            <form
              onSubmit={handleSubmit}
              className="flex relative justify-center md:justify-start items-center bg-white rounded-full border-gray-300 overflow-hidden w-4/5 mx-auto lg:w-full"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-2 py-2 md:px-6 md:py-6 text-gray-500 border border-gray-300 placeholder:text-gray-400 rounded-full outline-none"
                required
                value={formData.email} // Controlled input
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-primary absolute right-0 max-sm:m-1 m-2 max-sm:text-sm text-white font-bold py-2 px-4 md:py-4 md:px-8 rounded-full focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Side - Video */}
          <div className="lg:w-1/2 lg:flex hidden justify-center lg:justify-end">
            <video
              className="h-[35rem] rounded-[2.5rem] absolute -bottom-[3rem]"
              src={NewsLetter}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;

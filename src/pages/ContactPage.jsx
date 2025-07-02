import React, { useState } from "react";
import { Link } from "react-router-dom";

// بيانات وسائل التواصل
const contactMethods = [
  {
    title: "Email Us",
    description: "support@company.com",
    btnText: "Send Email",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    description: "+1 (555) 123-4567",
    btnText: "Call Now",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
  },
  {
    title: "Live Chat",
    description: "Available 24/7",
    btnText: "Start Chat",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call or logic here
  };

  return (
    <main className="bg-gray-50 min-h-screen mx-8 my-5 pt-52">
      {/* Header */}
      <section className="text-center pt-20 pb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          We're here to help and answer any questions you might have.
        </p>
      </section>

      {/* Contact Options */}
      <section className="max-w-6xl mx-auto px-6 mb-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {contactMethods.map((item, index) => (
          <div key={index}>
            <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 mb-4">{item.description}</p>
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              {item.btnText}
            </Link>
          </div>
        ))}
      </section>

      {/* Contact Form & Office Info */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-20">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                  placeholder={`Your ${field}`}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-gray-900"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors font-medium text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Office Info + Map */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-gray-900">Visit Our Office</h2>
          <div className="flex items-start gap-4">
            <div className="text-blue-500 mt-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-500 leading-relaxed">
              123 Business Street, Suite 100
              <br />
              City, State 12345
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-blue-500 mt-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
          <div className="w-full h-80 rounded-lg overflow-hidden border">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.397057327308!2d31.235711515115305!3d30.0444199818799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fc8f7d9f0a5%3A0x6e7c5d038fe3a7cb!2sTahrir%20Square!5e0!3m2!1sen!2seg!4v1710000000000!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

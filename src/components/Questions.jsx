import React, { useState } from "react";
import questions from "../assets/bg_questions.png"; // صورة الأسئلة

const faqs = [
  {
    question: "Is it safe to buy and sell game accounts here?",
    answer:
      "Absolutely! We use secure and verified systems to protect both buyers and sellers. Every transaction goes through a trusted process to ensure safety and transparency.",
  },
  {
    question: "How fast will I receive my purchase?",
    answer:
      "Most orders are delivered instantly or within a few minutes. In rare cases, it might take up to a few hours depending on the game or additional verification steps.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We support multiple payment options such as Credit/Debit Cards, PayPal, and Local Payment Gateways (depending on your region).",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "Yes, creating an account is required to ensure secure transactions, order tracking, and access to full customer support features.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "We offer our services to most countries worldwide. If you’re unsure about your country, you can always contact our support team for confirmation.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-[32px] font-medium mb-10 text-left">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* الصورة */}
        <div>
          <img
            src={questions}
            alt="FAQ Illustration"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>

        {/* الأسئلة */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm transition cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-xl text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}

          {/* سكشن تواصل */}
          {/* <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center mt-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Can’t find your answer?
            </h3>
            <p className="text-blue-600 mb-3">
              We’re here to help you anytime.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Contact Support
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Questions;

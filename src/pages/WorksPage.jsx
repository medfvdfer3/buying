import React from "react";
import { Link } from "react-router-dom";
import { Search, CreditCard, Download, Check, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Available Cards",
    desc: "Explore our extensive collection of digital cards for any occasion",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    desc: "Choose your preferred payment method and complete the transaction safely",
  },
  {
    icon: Download,
    title: "Instant Digital Delivery",
    desc: "Receive your digital cards immediately in your inbox",
  },
];

const reasons = [
  "24/7 Customer Support",
  "Secure Transactions",
  "Instant Delivery",
  "Money-Back Guarantee",
];

const WorksPage = () => {
  return (
    <div className="bg-white pb-16 px-6 md:px-8 pt-52">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Header */}
        <section className="text-center bg-gray-50 p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h1>
          <p className="text-gray-600">
            Simple steps to get started with our platform
          </p>
        </section>

        {/* Steps */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="bg-blue-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 relative">
                <step.icon className="w-8 h-8 text-white" />
                <div className="absolute -top-10 -right-10 w-8 h-8 bg-blue-600 text-white font-bold text-sm rounded-full flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </section>

        {/* Why & Rating */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-gray-50 p-10 rounded-sm">
          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Why Choose Us
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="bg-blue-100 w-8 h-8 mr-3 flex items-center justify-center rounded-full">
                    <Check className="w-4 h-4 text-blue-600" />
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Rating */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Customer Satisfaction
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < 4
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">4.8/5</span>
            </div>
            <p className="text-gray-600 mb-6">
              Join thousands of happy customers
            </p>
            <blockquote className="bg-white p-4 border rounded-lg italic text-gray-700">
              "The platform is incredibly easy to use. I got my digital cards
              instantly and the quality was amazing!"
              <footer className="text-sm text-gray-500 mt-2">
                - Sarah Johnson, Digital Designer
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-white py-12 px-6 rounded-lg border">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of satisfied customers today
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3"
          >
            Get Started Now
          </Link>
          <div>
            <Link
              to="/support"
              className="text-blue-600 text-sm hover:underline"
            >
              Need Help?
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorksPage;

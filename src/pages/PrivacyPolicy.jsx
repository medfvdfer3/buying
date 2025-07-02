import React, { useState } from "react";
import {
  Info,
  Users,
  Database,
  Cookie,
  Server,
  Shield,
  User,
  Mail,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("Introduction");

  const sections = [
    { id: "Introduction", icon: Info, title: "Introduction" },
    {
      id: "Information We Collect",
      icon: Users,
      title: "Information We Collect",
    },
    {
      id: "How We Use Your Data",
      icon: Database,
      title: "How We Use Your Data",
    },
    { id: "Cookies Policy", icon: Cookie, title: "Cookies Policy" },
    { id: "Third-Party Services", icon: Server, title: "Third-Party Services" },
    { id: "Data Security", icon: Shield, title: "Data Security" },
    { id: "Your Rights", icon: User, title: "Your Rights" },
    { id: "Contact Us", icon: Mail, title: "Contact Us" },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white pt-52">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <h2 className="font-semibold text-gray-900 mb-4">
              Table of Contents
            </h2>
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg hover:bg-gray-100 transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-16">
          {sections.map(({ id, title, icon: Icon }) => (
            <section key={id} id={id} className="scroll-mt-24">
              <div className="flex items-center space-x-2 mb-4">
                <Icon className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              </div>

              {/* Custom content per section */}
              {id === "Introduction" && (
                <p className="text-gray-700">
                  This Privacy Policy describes how our company ('we', 'us', or
                  'our') collects, uses, and shares your personal information
                  when you use our services. By using our services, you agree to
                  the collection and use of information in accordance with this
                  policy.
                </p>
              )}

              {id === "Information We Collect" && (
                <ul className="space-y-3 text-gray-700">
                  {[
                    [
                      "Personal Information",
                      "Name, email address, phone number, and billing information when provided.",
                    ],
                    [
                      "Usage Data",
                      "Information on how you interact with our services.",
                    ],
                    [
                      "Technical Data",
                      "IP address, browser type, device information, and cookies.",
                    ],
                    ["Location Data", "General location based on IP address."],
                  ].map(([label, desc], i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>{label}:</strong> {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {id === "How We Use Your Data" && (
                <ul className="space-y-3 text-gray-700">
                  {[
                    "To provide and maintain our services",
                    "To notify you about changes to our services",
                    "To provide customer support",
                    "To gather analytics data to improve our services",
                    "To detect, prevent, and address technical issues",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {id === "Cookies Policy" && (
                <ul className="space-y-3 text-gray-700">
                  {[
                    [
                      "Essential Cookies",
                      "Required for basic website functionality",
                    ],
                    [
                      "Analytics Cookies",
                      "Help us understand how visitors interact with our website",
                    ],
                    [
                      "Marketing Cookies",
                      "Used to track visitors across websites",
                    ],
                    [
                      "Preference Cookies",
                      "Remember your settings and preferences",
                    ],
                  ].map(([label, desc], i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>{label}:</strong> {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {id === "Third-Party Services" && (
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Analytics providers for website performance monitoring",
                    "Payment processors for secure transactions",
                    "Marketing and advertising partners",
                    "Cloud service providers for data storage",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {id === "Data Security" && (
                <p className="text-gray-700">
                  We implement appropriate security measures to protect your
                  personal information. Data is encrypted during transmission
                  and stored securely. We regularly review and update our
                  security practices to ensure continued protection.
                </p>
              )}

              {id === "Your Rights" && (
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Access your personal data",
                    "Correct inaccurate data",
                    "Request deletion of your data",
                    "Object to data processing",
                    "Data portability",
                    "Withdraw consent",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {id === "Contact Us" && (
                <div className="space-y-2 text-gray-700">
                  <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at:
                  </p>
                  <p>
                    <strong>Email:</strong> privacy@company.com
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Privacy Street, Security City,
                    12345
                  </p>
                  <p>
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
